import React from 'react';
// import logo from './logo.svg';
// import './App.scss';
import testImage from '../testimage.jpg'
export interface Episode {
    name: string;
    episode: number;

    releaseDate: string;
    season: number;

    backgroundColor: string;
}

export interface RowProps {
    season: string;
    episodes: Episode[];

}

const Row = ({ episodes, season }: RowProps) => {
    return (<div className='tier'>
        <div className='tier-name'>
            {season}
        </div>
        <div>
            <h2 className='tier-title'>
                Tier
            </h2>
            <div className='episode-container'>
                {episodes.map(episode => <EpisodeItem episode={episode} key={episode.name}></EpisodeItem>)}
            </div>
        </div>
    </div>);
}


export const EpisodeItem = ({ episode }: { episode: Episode }) => {
    return (<div className='episode background-one rounded' style={{'backgroundColor': episode.backgroundColor}}>
        <div className='thumbnail-container'>
            <img className='rounded' src={testImage}></img>
        </div>
        <div style={{'fontSize': '15px'}}>
            <div>S{episode.season} E{episode.episode} </div> {episode.name}</div>
    </div>)
}

export default Row;
