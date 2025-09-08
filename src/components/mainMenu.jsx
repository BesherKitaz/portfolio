import React from "react";
import '../css/mainMenu.css'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'

function MainMenu() {
    return (
        <>
            <div className="mainMenu">
                <h1 className="mb-4 color-primary"> Sections </h1>
                <ul>
                    <li>
                        <Link to='/aboutme'> About me </Link>    
                    </li>
                    <li>
                        <Link to='/education'> Education </Link>
                    </li>
                    <li>
                        <Link to='/experience'> Experience </Link>
                    </li>
                    <li>
                        <Link to='/projects'> Projects </Link>
                    </li>
                    <li>
                        <Link to='/skills'> Skills </Link>
                    </li>
                </ul>
            </div>
        </>
    )
}

export default MainMenu;

