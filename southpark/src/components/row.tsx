import React from 'react';
import { IRenderComponent } from './sortable';
export interface Episode {
    name: string;
    episode: number;

    releaseDate: string;
    season: number;

    backgroundColor: string;
    thumbnail: string;

    id: string;
}

export interface RowProps {
    id: string;
    episodes: Episode[];
}

export interface EpisodeItemProps extends IRenderComponent {
    data: Episode;
}

export const EpisodeItem = ({ data, row, changeTier }: EpisodeItemProps) => {

    let quickTiers;

    function emitChangeTier(tier: string) {
        if (changeTier) {
            changeTier(tier)
        }
    }

    if (row) {
        quickTiers = (<div className='quick-tier-container'>
            {['s', 'a', 'b', 'c', 'd', 'f', 'u'].filter(tier => tier !== row).map(tier =>
                <button className='quick-tier' key={tier} onClick={() => emitChangeTier(tier)}>
                    {tier}
                </button>
            )}
        </div>)
    }

    return (<div className='episode background-one rounded' style={{ 'backgroundColor': data.backgroundColor }}>
        {/* <div style={{'width': '100%', 'height': '100%', position: 'absolute', top: 0, bottom: 0, left: 0, right: 0}}></div> */}
        <div className='thumbnail-container'>
            <img className='rounded' src={data.thumbnail}></img>
        </div>
        <div style={{ 'fontSize': '15px' }}>
            <div>S{data.season} E{data.episode} </div> {data.name}</div>
        {quickTiers}
    </div>)
}


export const MemoEp = React.memo(EpisodeItem);
