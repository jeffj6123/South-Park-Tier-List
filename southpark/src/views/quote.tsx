import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { characters } from "../all_characters";
import { episodes } from "../all_episodes";
import { BarChart } from "../components/breakdown";
import { Character, MemoCharacterItem } from "../components/character-tile";
import LoadingScreen from "../components/loading-screen";
import { Episode, MemoEp } from "../components/row";
import PromiseLockedButton from "../components/save-button";
import { Grid } from "../components/sortable";
import { episodeType } from "../constants";
import { httpServiceContext, ILine } from "../services/http.service";
import { UserContext } from "../user-context";

export interface IQuoteState {
    line: ILine;
    loading: boolean;
    showEpisode: boolean;
    episode: Episode;
    characters: Character[];
    guesses: Character[];
    showNext: boolean;
}

const isCorrectCharacter = (character: Character, line: ILine) => {
    return character.name.toLowerCase().includes(line.character.toLowerCase())
}

export function Quote() {
    const httpService = useContext(httpServiceContext);
    const { loggedIn } = useContext(UserContext);
    const [streak, setStreak] = useState(0);
    const [state, setState] = useState<IQuoteState>({
        loading: true,
        line: null,
        showEpisode: false,
        episode: null,
        guesses: [],
        characters: [],
        showNext: false
    });

    const getNextQuote = async () => {
        return httpService.getQuote().then(line => {
            setState({
                loading: false,
                line,
                showEpisode: false,
                episode: episodes.find(ep => ep.apiID === +line.episode),
                characters: characters.filter(char => [10, 3, 27, 37, 152].includes(char.id))
                                       .map(char => ({...char, id: char.id.toString()})),
                guesses: [],
                showNext: false,
                })
        })
    }

    const removeGuess = () => {
        const possibleGuesses = state.characters.filter(char => !isCorrectCharacter(char, state.line));
        const guess = possibleGuesses[Math.round(possibleGuesses.length * Math.random())]
        setState(value => ({...value, guesses: [...value.guesses, guess]}))

    }

    const guess = (char: Character) => {
        if(isCorrectCharacter(char, state.line)) {
            setState(state => ({...state, showNext: true}))
            if(state.guesses.length === 0) {
                setStreak(count => count += 1)
            }
        }else {
            setState(state => ({...state, guesses: [...state.guesses, char]}));
            if(!state.showNext) {
                setStreak(0);
            }
        }
    }

    useEffect(() => {
        getNextQuote();
    }, [])


    let view = (<LoadingScreen></LoadingScreen>)

    if (!state.loading) {
        view = <div>
            {streak > 0 && <span className="streak">
                <i className="ri-fire-fill"></i> {streak}
            </span>}
            <div className="quote-line">
            <h1>Who Said it?</h1>

            <i className="ri-double-quotes-l"></i>
                {state.line.line}   
                <i className="ri-double-quotes-r"></i>
            </div>

            <div className="quote-button-container">
                <button className="simple-button vertical-center primary" onClick={() => setState(state => ({...state, showEpisode: true}))}> <i className="ri-shuffle-line"></i> Show The Episode</button>
                <button className="simple-button vertical-center secondary" onClick={() => removeGuess()} disabled={state.guesses.length > 0} > <i className="ri-tv-line"></i> Remove an Option</button>
            </div>

            {true && <div className="quote-episode">
                <div style={{display: 'flex'}}>
                    <img src={state.episode.thumbnail}></img>
                </div>
                <div className="quote-text">
                    <h2>
                        {state.episode.name}
                    </h2>
                    <div>
                    S{state.episode.season} E{state.episode.episode}
                    </div>
                    <div>
                        {state.episode.description}
                    </div>
                </div>

            </div>}

            <div className="character-container">
                {state.characters.map(char =>
                <button key={char.id} className={`character-tile ${isCorrectCharacter(char, state.line) && state.showNext ? 'correct': ''}`} onClick={() => guess(char)} disabled={state.guesses.includes(char) }>
                    <div className='thumbnail-container'>
                        <img className='rounded' src={'/characters/' +  char.id + '.png'}></img>
                    </div>
                    <div style={{ 'fontSize': '15px' }}>
                        <div>{char.name}</div>
                    </div>
                </button>)}
            </div>

            <div style={{minHeight: '50px'}}>
                {state.showNext &&
                    <PromiseLockedButton promiseCallBack={getNextQuote} neutralDisplay="Next Quote" activeDisplay="Getting Next Quote" css={'next-quote'} ></PromiseLockedButton>
                    // <div className="next-quote" onClick={getNextQuote}>
                    // Next Quote
                    // </div>
                }
            </div>

        </div>
    }

    return (<div>
        {view}
    </div>)
}
