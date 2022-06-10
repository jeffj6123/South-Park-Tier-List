import { IRank } from '../services/http.service';
import { episodes, IRankable } from "../all_episodes";
import { nameToIdMap } from '../all_characters';
import { DropDown } from './dropdown';

export interface ChartProps {
    ranks: Record<string, IRankable[]>;
}

function getValueFromArray(index: number, arr: any[]) {
    return arr.length - index;
}


//TODO ALL OF THAT PLEASE
export function BarChart(props: ChartProps) {
    const ranksWithoutUnranked = Object.keys(props.ranks).filter(r => r !== 'u');
    let highest = ranksWithoutUnranked[0];

    ranksWithoutUnranked.forEach(rank => {
        if (props.ranks[rank].length > props.ranks[highest].length) {
            highest = rank;
        }
    })

    const seasonMap = {};
    const characterMap = {};

    const info = ranksWithoutUnranked.map((rank, index) => {
        const rankList = props.ranks[rank];

        rankList.forEach(ep => {
            const episode = episodes.find(e => e.id === ep.id);
            const value = getValueFromArray(index, ranksWithoutUnranked);
            seasonMap[episode.season] = (seasonMap[episode.season] || 0) + value;
            episode.characters.forEach(char => {
                characterMap[char.name] = (characterMap[char.name] || 0) + value;
            })
        })

        return {
            id: rank,
            count: rankList.length,
            ratio: rankList.length / props.ranks[highest].length 
        }
    })

    const orderedSeasonRanks = Object.keys(seasonMap).map(key => ({ season: key, score: seasonMap[key] })).sort((a, b) => b.score - a.score);
    const orderedCharacterRanks = Object.keys(characterMap).map(key => ({ name: key, score: characterMap[key] })).sort((a, b) => b.score - a.score);

    const favoriteSeasons = orderedSeasonRanks.splice(0, 3);
    const leastFavoriteSeasons = orderedSeasonRanks.splice(-3, 3).reverse();

    const favoriteCharacters = orderedCharacterRanks.splice(0, 3);
    const leastFavoriteCharacters = orderedCharacterRanks.splice(-3, 3).reverse();

    return (
        <DropDown dropdownToggle={<button className='simple-button'>Show Stats</button>}
            dropdownContent={
                <div className='info-layout shadow'>
                    <div className="chart">
                        {info.map(rank => {
                            return (<div className='bar-item'>
                                <div>
                                    {rank.id}
                                </div>
                                <div>
                                    {rank.count}
                                </div>
                                <div>
                                    <div className='chart-bar' style={{ width: ((100 * rank.ratio).toString() + '%') }}></div>
                                </div>
                            </div>)
                        })}
                    </div>
                    <div className='right-panel'>
                        <div>
                            <div>
                                Favorite Characters
                            </div>
                            <div className='tile-circle-container'>
                                {favoriteCharacters.map(char => (<div className='info-tile-circle'>
                                    <img className='rounded' src={'/characters/' + nameToIdMap[char.name]?.id + '.png'} style={{ width: '30px', objectFit: 'contain', maxHeight: '30px' }}></img>
                                </div>))}
                            </div>
                        </div>

                        {/* <div>
                        <div>
                            Least Liked Characters
                        </div>
                        <div className='tile-circle-container'>
                            {leastFavoriteCharacters.map(char => (<div className='info-tile-circle'>
                                <img className='rounded' src={'/characters/' + nameToIdMap[char.name]?.id + '.png'} style={{ width: '30px', objectFit: 'contain', maxHeight: '30px' }}></img>
                            </div>))}
                        </div>
                    </div> */}
                        <div>
                            <div>
                                Favorite Seasons
                            </div>
                            <div className='tile-circle-container'>
                                {favoriteSeasons.map(season => (<div className='info-tile-circle'> {season.season}</div>))}
                            </div>
                        </div>

                        <div>
                            <div>
                                Least Liked Season
                            </div>
                            <div>
                                <div className='tile-circle-container'>
                                    {leastFavoriteSeasons.map(season => (<div className='info-tile-circle'> {season.season}</div>))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            }></DropDown>)
}