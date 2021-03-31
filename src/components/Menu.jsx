import React from 'react'
import { Link } from 'react-router-dom'

import './Menu.css'

export default function Menu() {
    return(
        <aside className="Menu">
            <nav>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/param/Bruno">Param</Link>
                    </li>
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                    <li>
                        <Link to="/fosorio">FOsorio</Link>
                    </li>
                </ul>
            </nav>         
        </aside>
    )
}