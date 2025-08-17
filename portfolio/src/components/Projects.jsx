import React from "react";
import { Link } from "react-router-dom";
import { motion } from 'framer-motion'

import '../css/projects.css';
import ratFightPreview from '../assets/ratfight-preview.png'

const Project = ({ title, description, gitHubLink, webLink, image }) => {
    return (
        <>
            <div className="project-card">
                <img src={image} alt="A preview of the website" width="100%" height="auto"/>
                <div>
                    <h3>{title}</h3>
                    <p>{description}</p>
                    <a href={gitHubLink} target="_blank" rel="noopener noreferrer" className="d-block">GitHub Repository</a>
                    <a href={webLink} target="_blank" rel="noopener noreferrer" className="d-block">Live Website</a>
                </div>
            </div>
        </>
    )
}

const Projects = () => {
    return (
        <motion.div
            key="home"
            initial={{ x: '-100%', opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: '100%', opacity: 10 }}
            transition={{ duration: 0.5 }}
        >
            <div className="projects">
                <div className="container">
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
                            <Project title="Project 2" description="Description for Project 2" />
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
                    <div><Link to='/'> Return </Link></div>
                </div>
            </div>
        </motion.div>
    )
}


export default Projects;

