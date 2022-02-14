import React, { useContext } from "react";
import TierSearch from "../components/tier-search";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import { stringify } from "querystring";
import { masterCharacterList, masterEpisodeList } from "../constants";
import { HttpService, httpServiceContext } from "../services/http.service";

export function Landing() {

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
            <div className="landing-button-wrapper">
                <button className="simple-button primary" onClick={() => viewRandom()}>View Random List</button>
                <button className="simple-button secondary" onClick={() => navigateToMaster(masterEpisodeList)} >View Original Episode List</button>
                <button className="simple-button secondary" onClick={() => navigateToMaster(masterCharacterList)} >View Original Character List</button>
            </div>
            <TierSearch></TierSearch>
            <div className="faq-blurb">
                <h3>Why?</h3>
                <div>
                    Great question, my girlfriend Kiersten started watching southpark for the first time. Us being a fan of tier lists, felt this would be a good idea

                </div>
            </div>

            <div className="faq-blurb">
                <h3>Where do you get this data?</h3>
                <div>
                    I get this information from two locations. First is the southpark API that (blank) has put together which was by far the most useful and second I used the southpark wiki.
                    The list of episodes was gathered from the southpark API and from there I scraped thumbnails and descriptions from the wiki.
                </div>
            </div>

            <div className="faq-blurb">
                <h3>Why is there data missing?</h3>
                <div>
                    Most of the information is scraped and on top of that put together by volunteers. Inparticular the character lists for episodes seem to be missing and that is due to the api only having it for some.
                </div>
            </div>

            <div className="faq-blurb">
                <h3>I would like to know a bit more</h3>
                <div>
                    I wrote up some of the challenges and approaches taken in the process of making this site, like frameworks used and scripts for pulling data.
                </div>
            </div>
        </div>
    )
}