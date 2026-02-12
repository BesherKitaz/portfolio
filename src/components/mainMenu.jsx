import React from "react";
import '../css/mainMenu.css'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'

function MainMenu() {
    return (
        <>
            <div className="mainMenu mt-5">
                <ul>
                    <li className="mb-2">
                        <Link to='/aboutme'> About me </Link>    
                    </li>
                    <li className="mb-2">
                        <Link to='/projects'> Projects </Link>
                    </li>
                    <li className="mb-2">
                        <Link to='/skills'> Skills </Link>
                    </li>
                    <li className="mb-2">
                        <Link to="/contact">Contact</Link>
                    </li>
                </ul>
            </div>
        </>
    )
}

export default MainMenu;

