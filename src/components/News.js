import React, { useContext } from 'react';
import { ThemeContext } from './ThemeContext'
import { Carousel, Collapsible, CollapsibleItem } from 'react-materialize'
import { Icon} from 'materialize-css'

export default function News() {
    const { theme, toggle, dark } = useContext(ThemeContext)
    return (
        <div class='news-container' style={{ backgroundColor: theme.backgroundColor, color: theme.color }}>
            <div class='news-field'>
                <div class='title'>
                    <h2>News</h2>

                    {/* <Collapsible accordion={false}>
                        <CollapsibleItem
                            expanded={false}
                            header="Better safe than sorry. That's my motto."
                            icon={<Icon>filter_drama</Icon>}
                            node="div"
                        >
                            Better safe than sorry. That's my motto.
                        </CollapsibleItem>
                        <CollapsibleItem
                            expanded={false}
                            header="Yeah, you do seem to have a little 'shit creek' action going."
                            icon={<Icon>place</Icon>}
                            node="div"
                        >
                            Yeah, you do seem to have a little 'shit creek' action going.
                        </CollapsibleItem>
                        <CollapsibleItem
                            expanded={false}
                            header="You know, FYI, you can buy a paddle. Did you not plan for this contingency?"
                            icon={<Icon>whatshot</Icon>}
                            node="div"
                        >
                            You know, FYI, you can buy a paddle. Did you not plan for this contingency?
                        </CollapsibleItem>
                    </Collapsible> */}

                    <h4>Latest news about us:</h4>
                    <Carousel
                        carouselId="Carousel-58"
                        className="white-text center"
                        options={{
                            fullWidth: true,
                            indicators: true
                        }}
                    >
                        <div className="red">
                            <h2>
                                First New
                            </h2>
                            <p>
                                This is your first New
                            </p>
                        </div>
                        <div className="amber">
                            <h2>
                                Second New
                            </h2>
                            <p>
                                This is your second New
                            </p>
                        </div>
                        <div className="green">
                            <h2>
                                Third New
                            </h2>
                            <p>
                                This is your third New
                            </p>
                        </div>
                        <div className="blue">
                            <h2>
                                Fourth New
                            </h2>
                            <p>
                                This is your fourth New
                            </p>
                        </div>
                    </Carousel>
                </div>
            </div>
        </div>
    )
}