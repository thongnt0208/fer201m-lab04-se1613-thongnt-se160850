import React from 'react'
import { Link } from 'react-router-dom'
import { useLocation } from 'react-router-dom';//returns the location object used by the react-router. This object represents the current URL.
import M from 'materialize-css';
import {Icon } from 'materialize-css'

export default function Navigation() {

    //assigning location variable
    const location = useLocation();
    //destructuring pathname from location --> /contact
    const { pathname } = location;
    //split method to get the name of the path in array --> ['', 'contact']
    const splitLocation = pathname.split("/");

  

    return (
        <div className="navigation">
            <nav className="nav-wrapper black">
                <a href="#" class="brand-logo right">Logo</a>
                <a href="#" data-target="mobile-demo" class="sidenav-trigger"><i class="material-icons" >menu</i></a>
                <ul className="left hide-on-med-and-down">
                    <li className={splitLocation[1] === "" ? "active" : ""}>
                        <a><Link to={''}><i class="material-icons" >home</i>HOME</Link></a>
                    </li>
                    <li className={splitLocation[1] === "news" ? "active" : ""}>
                        <Link to={'news'}>NEWS</Link>
                    </li>
                    <li className={splitLocation[1] === "about" ? "active" : ""}>
                        <Link to={'about'}>ABOUT</Link>
                    </li>
                    <li className={splitLocation[1] === "contact" ? "active" : ""}>
                        <Link to={'contact'}>CONTACT</Link>
                    </li>
                </ul>
            </nav>

            
        </div>
        
    )

}