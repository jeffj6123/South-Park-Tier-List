import React, { useContext } from "react";
import TierSearch from "../components/tier-search";
import { Link, useNavigate } from "react-router-dom";
import { masterCharacterList, masterEpisodeList } from "../constants";
import { httpServiceContext } from "../services/http.service";
import { UserContext } from "../user-context";

export function Landing() {
    const { loggedIn }  = useContext(UserContext);
    const httpService = useContext(httpServiceContext);
    const navigate = useNavigate();

    const viewRandom = () => {
        httpService.getRandomTier().then(data => {
            navigate(`/${data.type}/${data.key}`, {replace: true})
        }, () => {
            console.log("error")
        })
    }

    const navigateToMaster = (url: string) => {
        navigate(url, {replace: true});
    }

    return (
        <div className="landing-container">
            {!loggedIn && (<div className="create-banner shadow">
                Log in to create your own tier lists
            </div>)}

            <div className="landing-button-wrapper">
                <button className="simple-button vertical-center primary" onClick={() => viewRandom()}> <i className="ri-shuffle-line"></i> View Random List</button>
                <button className="simple-button vertical-center secondary" onClick={() => navigateToMaster(masterEpisodeList)} > <i className="ri-tv-line"></i> View Original Episode List</button>
                <button className="simple-button vertical-center secondary" onClick={() => navigateToMaster(masterCharacterList)} > <i className="ri-user-line"></i>View Original Character List</button>
            </div>
            <TierSearch></TierSearch>
            <Link to={'/quote'}>
                <div className="play-game" >
                    Who Said It? Game
                </div>
            </Link>
            <div className="faq-blurb first">
                <h3>Why?</h3>
                <div>
                    My girlfriend <span className="highlight-text">Kiersten</span> started watching southpark for the first time. We are both big fans of tier lists and thought this would be a great opportunity to mix the two.
                </div>
            </div>

            <div className="faq-blurb">
                <h3>Where do you get this data?</h3>
                <div>
                    I get this information from two locations. 
                    <ul>
                        <li>
                            The <a className="highlight-text" href="https://spapi.dev/">South Park API</a> has done a good job of pulling information off the official wiki. This provided a great starting point.
                        </li>
                        <li>
                            The <a className="highlight-text" href="https://southpark.fandom.com" target="_blank"> South park Wiki </a> then provided all of the rest of the information.
                        </li>
                    </ul>
                </div>
            </div>

            <div className="faq-blurb">
                <h3>Why is there data missing?</h3>
                <div>
                    This information was either missing from the South Park API or I have a bug in my script for pulling data.
                </div>
            </div>

            <div className="faq-blurb">
                <h3>I would like to know a bit more</h3>
                <div>
                    I plan on writing about some of the process of building this site in an article soon.
                </div>
            </div>
        </div>
    )
}