import Spinner from "./loader";

export default function LoadingScreen() {
    return (<div className="loading-screen">
        <div className="loader-spinner">
        <Spinner width={'60px'} ></Spinner>
        </div>
        <div className="loading-text">
            Loading List
        </div>
    </div>)
}