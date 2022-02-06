import React from "react";

export class Landing extends React.Component<{}, any> {
    constructor(props) {
        super(props);
    }

    render() {
        const tierLists = [{
            favorites: ['kyle', 'eric'],
            rankedEpisodeCount: 50,
            rankedCharacterCount: 30,
            id: 19
        }]

        return (
            <div className="landing-container">
                <div className="tier-tile-container">
                    <div className="tier-tile">
                        <div>
                            
                        </div>
                    </div>
                </div>

                <div className="landing-table">
                    <table className="landing-table-container" >
                        <thead>
                            <tr>
                                <td>
                                    Favorite characters
                                </td>
                                <td>
                                    Episodes ranked
                                </td>
                                <td>
                                    Characters ranked
                                </td>

                            </tr>
                        </thead>
                        <tbody>
                            {tierLists.map(tier => (
                                <tr key={tier.id}>
                                    <td>
                                        {tier.favorites}
                                    </td>
                                    <td>
                                        {tier.rankedCharacterCount}
                                    </td>
                                    <td>
                                        {tier.rankedEpisodeCount}
                                    </td>
                                </tr>))
                            }
                        </tbody>
                    </table>
                </div>



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
                    <h3>I would like to know a bit more</h3>
                    <div>
                        I wrote up some of the challenges and approaches taken in the process of making this site, like frameworks used and scripts for pulling data.
                    </div>
                </div>
            </div>
        )
    }
}