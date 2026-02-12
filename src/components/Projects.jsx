import React from "react";
import { Link } from "react-router-dom";
import { motion } from 'framer-motion'

import '../css/projects.css';
import ratFightPreview from '../assets/ratfight-preview.png'

const Project = ({ title, description, gitHubLink, webLink="", webLinkAlt="", image="", imageAltText="" }) => {
    return (
        <>
            <div className="project-card">
                <div>
                    <h3>{title}</h3>
                    <p>{description}</p>
                    <a href={gitHubLink} target="_blank" rel="noopener noreferrer" className="d-block">Site's Repository</a>
                    {webLink ? <a href={webLink} target="_blank" rel="noopener noreferrer" className="d-block">Live Website</a> : <></>}
                </div>
            </div>
        </>
    )
}

const Projects = () => {
    return (
        <motion.div
            key="home"
            initial={{ x: '0%', opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: '0%', opacity: 0 }}
            transition={{ duration: 0.5 }}
        >
            <div className="projects mt-5">
                <div className="container">
                    <h1> My Projects </h1>
                    <div className="row g-5">
                        <div className="col-lg-6 col-12">
                            <Project 
                                title="FIRST Robotics Team 9152"
                                description="Helped design and develop the website for a FIRST Robotics Competition team, improving site organization, usability, and presentation of team activities and technical work."
                                gitHubLink="https://github.com/Rat-Fight/9152"
                                webLink="https://rat-fight.github.io/9152/"
                                image={ratFightPreview}
                            />
                        </div>
                        <div className="col-lg-6 col-12">
                            <Project          
                                title="CELTS Department, Berea College"
                                description="Contributed to the design and development of the CELTS (Center for Excellence in Learning Through Service) website, helping improve its usability, structure, and presentation of student service programs and community engagement resources."
                                gitHubLink="https://github.com/BCStudentSoftwareDevTeam/celts"
                                webLinkAlt="Live Website is only availabe to Berea College members"
                                imageAltText="A preview is not available due to privacy concerns." 
                            />
                        </div>
                    </div>
                    <div className="row g-5 py-5">
                        <div className="col-lg-6 col-12">
                            <Project 
                                title="AI Flashcard App" 
                                description="Built a swipe-based flashcard app that uses an algorithm to update each card’s score based on user performance, helping prioritize material that needs more review." 
                                gitHubLink="https://github.com/BesherKitaz/AIFlashCards"
                            />
                        </div>
                        <div className="col-lg-6 col-12">
                            <Project 
                                title="Creatorverse" 
                                description="Built a React web app that performs full CRUD operations on a list of content creators, using async API calls, dynamic routing for individual creator pages, and card-based UI styling with PicoCSS."
                                gitHubLink="https://github.com/BesherKitaz/CreatorVerse"
                            />
                        </div>
                    </div>
                    <div className="mb-5"><Link to='/'> Return </Link></div>
                </div>
            </div>
        </motion.div>
    )
}


export default Projects;

