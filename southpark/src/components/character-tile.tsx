import { IRenderComponent } from "./sortable"

export interface Character {
    name: string;
    id: string;
    thumbnail: string;
}

export interface CharacterProps extends IRenderComponent {
    data: Character;
    children?: React.ReactNode;
}

export const CharacterItem = ({ data, children, dragging, last }: CharacterProps) => {
    return (<div className={`episode ${!dragging ? 'hover-info' : ''}`}>
        <div className={`rounded inner ${last ? 'open-left' : ''}`}>
            <div className='thumbnail-container'>
                <img className='rounded' src={data.thumbnail}></img>
            </div>
            <div style={{ 'fontSize': '15px' }}>
                <div>{data.name}</div>
                {children}
            </div>
        </div>
    </div>)
}