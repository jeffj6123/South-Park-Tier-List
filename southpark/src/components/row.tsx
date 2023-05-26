import React from 'react';
import { characters, nameToIdMap } from '../all_characters';
import { IRankable } from '../all_episodes';
import { IRenderComponent } from './sortable';

export interface Character {
    name: string;
}
export interface Episode extends IRankable {
    name: string;
    episode: number;

    description: string;
    characters: Character[];

    releaseDate: string;
    season: number;

    thumbnail: string;

    apiID: number;
    id: string;
}

export interface RowProps {
    id: string;
    episodes: Episode[];
}

export interface EpisodeItemProps extends IRenderComponent {
    data: Episode;
    children?: React.ReactNode;
}

//TODO FIX THE WAY CHARACTERS ARE GOTTEN
export const EpisodeItem = ({ data, children, dragging, last }: EpisodeItemProps) => {
    return (<div className={`episode ${ !dragging ? 'hover-info' : ''}`}>
        <div className={`rounded inner ${last ? 'open-left' : ''}`}>
            <div className={`additional-info `}>
                <div style={{ 'overflow': 'auto', height: '100%' }}>
                    <div>
                        <h2>
                            Summary
                        </h2>
                        {data.description}
                    </div>
                    <div>
                        <h2> Characters</h2>
                        <div className='character-list'>
                            {data.characters.map(char => (<div className='character-list-item' key={char.name}>
                                <img className='rounded' src={'/characters/' + nameToIdMap[char.name]?.id + '.png'} style={{ width: '20px' }}></img>
                                {char.name}
                            </div>))}
                        </div>
                    </div>
                </div>
            </div>
            <div className='thumbnail-container'>
                <img className='rounded' src={data.thumbnail}></img>
            </div>
            <div style={{ 'fontSize': '15px' }}>
                <div>S{data.season} E{data.episode} </div> {data.name}</div>
            {children}
        </div>
    </div>)
}


export const MemoEp = React.memo(EpisodeItem);
