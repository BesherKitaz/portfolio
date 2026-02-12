import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import '../css/contact.css'
import { Link } from "react-router-dom";

const Contact = () => {

    return (
        <div className="contact"> 
                <div className="container">
                <h1 className="m-5"> Contact Me </h1>
                <ul>
                    <li>    
                        <a href="mailto:besher.kitaz.dev@gmail.com">
                            <span><FontAwesomeIcon icon="fa-regular fa-envelope"/></span>
                            <span>besher.kitaz.dev@gmail.com</span>
                        </a>
                    </li>
                    <li>    
                        <a href="mailto:kitazb@berea.edu">
                            <span><FontAwesomeIcon icon="fa-regular fa-envelope"  /></span>
                            <span>kitazb@berea.edu</span>
                        </a>
                    </li>
                    <li>
                        <a href="tel:+1234567890">
                            <span><FontAwesomeIcon icon="fa-solid fa-phone"  /></span>
                            <span> (859) 756-2555</span>
                        </a>
                    </li>
                    <li>
                        <a href="https://www.linkedin.com/in/besher-kitaz/" target="_blank" rel="noopener noreferrer">
                            <span><FontAwesomeIcon icon="fa-brands fa-linkedin"/></span>
                            <span>LinkedIn Profile</span>
                        </a>
                    </li>
                    <li>
                        <a href="https://www.github.com/besherkitaz/" target="_blank" rel="noopener noreferrer">
                            <span><FontAwesomeIcon icon="fa-brands fa-github" /></span>
                            <span>GitHub Profile</span>
                        </a>
                    </li>            
                </ul>
                <Link to='/'> Return </Link>
            </div>
        </div>
    )
}

export default Contact;