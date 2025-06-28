import React from "react";
import '../css/mainMenu.css'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'

export default function() {
    return (
        <>
            <div className="mainMenu">
                <ul>
                    <li>
                        <Link to='/second-page'> Personal Info </Link>    
                    </li>
                    <li>
                        Projects
                    </li>
                    <li>
                        Skills
                    </li>
                    <li>
                        Qualifications
                    </li>
                </ul>
            </div>
        </>
    )
}