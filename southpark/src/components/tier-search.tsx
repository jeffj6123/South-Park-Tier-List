import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import RelativeTime from '@yaireo/relative-time'
import { httpServiceContext } from "../services/http.service";

export default function TierSearch() {
    const [tierLists, setTierLists] = useState([]);
    const relativeTime = new RelativeTime(); 
    const httpService = useContext(httpServiceContext);

    const navigate = useNavigate();

    const viewTier = (type: string, id: number) => {
        console.log("test")
        navigate(`/${type}/${id}`, {replace: true})
    };

    useEffect(() => {
        httpService.loadTiersList().then(tiers => {
            setTierLists(tiers.entities);
        })
    }, [])

    // const tierLists = [
    //     {
    //         rankedCount: 50,
    //         id: 19,
    //         lastUpdated: new Date("2022-02-07T00:10:31.075Z"),
    //         type: 'episodes'
    //     },
    //     {
    //         rankedCount: 50,
    //         id: 20,
    //         lastUpdated: new Date(),
    //         type: 'episodes'
    //     },
    //     {
    //         rankedCount: 50,
    //         id: 21,
    //         lastUpdated: new Date(),
    //         type: 'episodes'
    //     },
    //     {
    //         rankedCount: 50,
    //         id: 22,
    //         lastUpdated: new Date(),
    //         type: 'episodes'
    //     },
    // ]

    return (
        <div className="landing-table">
            <table className="landing-table-container" >
                <thead>
                    <tr>
                        <td>
                            Type

                            <i className="ri-arrow-up-line"></i>

                        </td>
                        <td>
                            # ranked
                        </td>
                        <td>
                            Last Updated
                        </td>

                    </tr>
                </thead>
                <tbody>
                    {tierLists.map(tier => (
                        <tr key={tier.id} onClick={() => viewTier(tier.type, tier.id)}>
                            <td>
                                {tier.type}
                            </td>
                            <td>
                                {tier.rankedCount}
                            </td>
                            <td>
                                {tier.lastUpdated && relativeTime.from(new Date(tier.lastUpdated))}
                            </td>
                        </tr>))
                    }
                </tbody>
            </table>
        </div>
    )
}
