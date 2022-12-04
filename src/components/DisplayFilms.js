/* eslint-disable react-hooks/rules-of-hooks */
import React, { useContext } from 'react'
import { useState } from 'react'//hook
import { ThemeContext } from './ThemeContext'
import { Link } from 'react-router-dom'

export default function displayFilms({ films }) {
    const [filmHook, setFilm] = useState([]);
    const { theme, toggle, dark } = useContext(ThemeContext)


    // console.log(theme.backgroundColor);
    return (
        <div className="films-container" style={{ backgroundColor: theme.backgroundColor, color: theme.color }}>
            <div class='switch-mode-container'>
                <a className='switch-mode' href='#switch' onClick={toggle}
                    style={{
                        backgroundColor: theme.backgroundColor,
                        color: theme.color,
                        outline: 'none'
                    }} data-testid="toggle-theme-btn">
                    Switch to {!dark ? 'Dark' : 'Light'} mode
                </a>
            </div>
            <div class="row">
                {films.map((films) => (

                    <div class="films-container col s12 m6 l4">
                        <div class="card">
                            <div class="card-image">
                                <img src={films.img} alt='a films thumbnail' />
                                <span class="card-title">{films.title}</span>
                            </div>
                            <div class="card-content">
                                <p>{films.rate}</p>                                
                                </div>
                            <div class="card-action">
                                <button className='more-detail-btn waves-effect waves-light btn-small black'>
                                    <Link to={`detail/${films.id}`}>More Detail</Link>
                                </button>
                            </div>
                        </div>
                    </div>


                ))}

            </div>
            <div id='popup-container' className='overlay'>
                <div className='popup'>
                    <img src={filmHook.img} alt='a man soccer player'></img>
                    <h2>{filmHook.name}</h2>
                    <a className='close' href='#close'>&times;</a>
                    <div className='content'>
                        {filmHook.info}
                    </div>
                    <button className='more-detail-btn'>
                        <Link to={`detail/${filmHook.id}`}>More Detail</Link>
                    </button>
                </div>
            </div>
        </div>
    )
}