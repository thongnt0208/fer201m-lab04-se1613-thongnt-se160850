import { useParams } from 'react-router-dom'
import { FilmsList } from '../lists/ListOfFilms'
import React from 'react'
import { useState } from 'react';
import ModalCase from './ModalCase';

export default function Details() {
    const userName = useParams();
    const film = FilmsList.find(obj => {
        return obj.id == userName.id;
    });
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className='detail-container'>
            <div className='film-card'>
                <div className='badge'><h1>{film.title}</h1></div>
                <div className='row'>
                    <div className='film-tumb col s12 m4'>
                        <div className='img'>
                            <img src={`${film.img}`} alt='a film thumbnail' />
                        </div>
                    </div>
                    <div className='film-details col s12 m6'>
                        <h4>{film.club}</h4>
                        <p>{film.info}</p>
                        <br></br>
                        <a onClick={() => setIsOpen(true)} className="btn-floating green darken-4">
                            <i class="large material-icons">play_circle_outline</i>
                        </a>
                        {isOpen && <ModalCase setIsOpen={setIsOpen} film={film} />}
                        <div className='row'>
                            <br></br>
                            <a class="waves-effect waves-light btn"><i class="material-icons left">event_seat</i>Book a seat</a>
                        </div>

                    </div>
                </div>

            </div>
        </div>
    )
}


