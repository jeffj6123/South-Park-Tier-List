import React from "react";
import { useNavigate } from 'react-router-dom';
import RelativeTime from '@yaireo/relative-time'

export default function TierSearch() {
    const relativeTime = new RelativeTime(); 

    const navigate = useNavigate();

    const viewTier = (type: string, id: number) => {
        console.log("test")
        navigate(`/${type}/${id}`, {replace: true})
    };

    const tierLists = [
        {
            rankedCount: 50,
            id: 19,
            lastUpdated: new Date("2022-02-07T00:10:31.075Z"),
            type: 'episodes'
        },
        {
            rankedCount: 50,
            id: 20,
            lastUpdated: new Date(),
            type: 'episodes'
        },
        {
            rankedCount: 50,
            id: 21,
            lastUpdated: new Date(),
            type: 'episodes'
        },
        {
            rankedCount: 50,
            id: 22,
            lastUpdated: new Date(),
            type: 'episodes'
        },
    ]

    return (
        <div className="landing-table">
            <table className="landing-table-container" >
                <thead>
                    <tr>
                        <td>
                            Type
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
                                {relativeTime.from(tier.lastUpdated)}
                            </td>
                        </tr>))
                    }
                </tbody>
            </table>
        </div>
    )
}
