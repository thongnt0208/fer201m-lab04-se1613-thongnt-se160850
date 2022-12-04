import React, { useContext } from 'react';
import { ThemeContext } from './ThemeContext'

export default function About() {

    const { theme, toggle, dark } = useContext(ThemeContext)
    return (
        <div class='about-container' style={{ backgroundColor: theme.backgroundColor, color: theme.color }}>
            <div class='about-field'>
                <div class='title'>
                    <h2>About</h2>
                    <div class="row">
                        <div class="col s12 m4">
                            <div class="card blue-grey darken-1">
                                <div class="card-content white-text">
                                    <span class="card-title">Who are we?</span>
                                    <p>I am a very simple card. I am good at containing small bits of information.
                                        I am convenient because I require little markup to use effectively.</p>
                                </div>
                                <div class="card-action">
                                    <a href="#">More Info</a>
                                    <a href="#">Feedback</a>
                                </div>
                            </div>
                        </div>

                        <div class="col s12 m4">
                            <div class="card blue-grey darken-1">
                                <div class="card-content white-text">
                                    <span class="card-title">How do we rate films?</span>
                                    <p>I am a very simple card. I am good at containing small bits of information.
                                        I am convenient because I require little markup to use effectively.</p>
                                </div>
                                <div class="card-action">
                                    <a href="#">More Info</a>
                                    <a href="#">Feedback</a>
                                </div>
                            </div>
                        </div>

                        <div class="col s12 m4">
                            <div class="card blue-grey darken-1">
                                <div class="card-content white-text">
                                    <span class="card-title">Why do we here?</span>
                                    <p>I am a very simple card. I am good at containing small bits of information.
                                        I am convenient because I require little markup to use effectively.</p>
                                </div>
                                <div class="card-action">
                                    <a href="#">More Info</a>
                                    <a href="#">Feedback</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}