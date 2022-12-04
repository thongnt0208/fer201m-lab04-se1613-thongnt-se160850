import React from 'react'

export default function ModalCase({ setIsOpen, film }) {
    return (
        <div className='modal-show' onClick={() => setIsOpen(false)}>
            <div id='modal1' className='modal' style={{ display: 'block', top: '35%' }}>
                <div className='modal-content'>
                    <h4>Trailer of {film.title} </h4>
                    <p><iframe width="560" height="315" src={film.clip} title={film.title} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></p>
                </div>
                <div className='modal-footer'>
                    <a className='modal-close red-text'>Close</a>
                </div>
            </div>

        </div>
    )
}