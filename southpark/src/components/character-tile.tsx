import React, { useMemo } from "react";
import { IRenderComponent } from "./sortable"

export interface Character {
    name: string;
    id: string;
    thumbnail: string;
    occupation: string;
    grade: string;
}

export interface CharacterProps extends IRenderComponent {
    data: Character;
    children?: React.ReactNode;
}

export const CharacterItem = ({ data, children, dragging, last }: CharacterProps) => {
    return (<div className={`episode ${!dragging ? 'hover-info' : ''}`}>
        <div className={`rounded inner`}>
            <div className='thumbnail-container'>
                <img className='rounded' src={'/characters/' +  data.id + '.png'}></img>
            </div>
            <div style={{ 'fontSize': '15px' }}>
                <div>{data.name}</div>
                <div>
                    {data.occupation} {data.grade && data.grade }
                </div>
                {children}
            </div>
        </div>
    </div>)
}

export const MemoCharacterItem = React.memo(CharacterItem);