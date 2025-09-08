import React from "react";
import { Link } from "react-router-dom";
import { motion } from 'framer-motion'

import '../css/projects.css';
import ratFightPreview from '../assets/ratfight-preview.png'

const Project = ({ title, description, gitHubLink, webLink="", webLinkAlt="", image="", imageAltText="" }) => {
    return (
        <>
            <div className="project-card">
                {image ? <img src={image}  width="100%" height="220px"/> : <div  className="imgAltText"> <h3> {imageAltText} </h3> </div>}
                <div>
                    <h3>{title}</h3>
                    <p>{description}</p>
                    <a href={gitHubLink} target="_blank" rel="noopener noreferrer" className="d-block">GitHub Repository</a>
                    {webLink ? <a href={webLink} target="_blank" rel="noopener noreferrer" className="d-block">Live Website</a> : <p> {webLinkAlt} </p>}
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
                                description="Description for Project 1"
                                gitHubLink="https://github.com/Rat-Fight/9152"
                                webLink="https://rat-fight.github.io/9152/"
                                image={ratFightPreview}
                            />
                        </div>
                        <div className="col-lg-6 col-12">
                            <Project          
                                title="CELTS Department, Berea College"
                                description="Center for Excellence in Learning, Teaching "
                                gitHubLink="https://github.com/BCStudentSoftwareDevTeam/celts"
                                webLinkAlt="Live Website is only availabe to Berea College members"
                                imageAltText="A preview is not available due to privacy concerns." />
                        </div>
                    </div>
                    <div className="row g-5 py-5">
                        <div className="col-lg-6 col-12">
                            <Project title="Project 3" description="Description for Project 3" />
                        </div>
                        <div className="col-lg-6 col-12">
                            <Project title="Project 4" description="Description for Project 4" />
                        </div>
                    </div>
                    <div className="mb-5"><Link to='/'> Return </Link></div>
                </div>
            </div>
        </motion.div>
    )
}


export default Projects;

