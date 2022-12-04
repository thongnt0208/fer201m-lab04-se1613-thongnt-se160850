import React, { useContext } from 'react';
import { ThemeContext } from './ThemeContext'

export default function Contact() {
    const { theme, toggle, dark } = useContext(ThemeContext)
    return (
        <div class='contact-container' style={{ backgroundColor: theme.backgroundColor, color: theme.color }}>
            <div class='contact-field'>
                <div class='title'>
                    <h2>Contact Us</h2>
                    <p>We're here to help! Send us your query via the form below or send us an email at <a href="mailto:trungthongnguyen2002@gmail.com">here</a>&nbsp;
                        for any issue you're facing.
                        <br></br>We would love to get feedbacks from you, too!
                    </p>
                </div>
                <div class="row">
                    <form class="col s12">
                        <div class="row">
                            <div class="input-field col s6">
                                <i class="material-icons prefix">account_circle</i>
                                <input id="icon_prefix" type="text" class="validate" />
                                <label for="icon_prefix"> Name</label>
                            </div>
                            <div class="input-field col s6">
                                <i class="material-icons prefix">phone</i>
                                <input id="icon_telephone" type="tel" class="validate" />
                                <label for="icon_telephone">Telephone</label>
                            </div>
                        </div>
                        <div class="row">
                            <div class="input-field col s12">
                                <input id="email" type="email" class="validate" />
                                <label for="email">Email</label>
                                <span class="helper-text" data-error="wrong" data-success="right">Helper text</span>
                            </div>
                        </div>
                        <div class="row">
                            <form class="col s12">
                                <div class="row">
                                    <div class="input-field col s12">
                                        <textarea id="textarea1" class="materialize-textarea" placeholder="Type anything you want to share with us ..."></textarea>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </form>
                </div>
                <a class="waves-effect waves-light btn"><i class="material-icons left">send</i>Submit</a>
            </div>
        </div>
    )
}