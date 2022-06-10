
export interface SpinnerProps {
    width?: number | string;
}

export default function Spinner(props: SpinnerProps) {
    const width = props.width || '25px';
    return (<div>
        <div className='loader rotate' style={{fontSize: width, width}}>
            <i className="ri-loader-5-fill"></i>
        </div>
    </div>)
}