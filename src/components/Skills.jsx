import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import '../css/skills.css'

const skillsList = [
    {skill: "HTML + CSS", logo: "fa-brands fa-html5"},
    {skill: "React", logo: "fa-brands fa-react"},
    {skill: "Flask", logo: "fa-solid fa-server"},
    {skill: "jQuery", logo: "fa-brands fa-square-js"},
    {skill: "MySQL", logo: "fa-solid fa-database"},
    {skill: "Python", logo: "fa-brands fa-python"},
    {skill: "Git + GitHub", logo: "fa-brands fa-github"},
    {skill: "Docker", logo: "fa-brands fa-docker"},
    {skill: "Java", logo: "fa-brands fa-java"},
    {skill: "C++", logo: "fa-solid fa-code"},
    {skill: "Pair programming", logo: "fa-solid fa-user-friends"},
    {skill: "Agile Methodologies", logo: "fa-solid fa-chart-line"},
]


const Skill = ({skill, logo, description=""}) => {
    return (
        <div className="col-lg-4 col-sm-12">
            <div className="skill glassyFrame p-5">
                <h1><FontAwesomeIcon icon={logo} style={{ color: "#9f00f5" }} /> </h1>
                <h3>{skill}</h3>
                <p>{description}</p>
            </div>
        </div>
    )
}
library.add(fas, far, fab)
const Skills = () => {
    
    const rows = [];
    for (let i = 0; i < skillsList.length; i += 3) {
        rows.push(skillsList.slice(i, i + 3));
    }

    return (
        <>
            <motion.div
                key="home"
                initial={{ x: '0%', opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: '0%', opacity: 0 }}
                transition={{ duration: 0.5 }}
                >
                <div className="skills">
                    <div className="container">
                        <h1 className="m-5">My Skills</h1>
                        {rows.map((row, index) => (
                            <div className="row gx-4 gy-4 mb-4">
                                {row.map((skillObj, index) => (
                                    <Skill key={index} skill={skillObj.skill} logo={skillObj.logo} />
                                ))}
                             </div>
                        ))}
                        <Link to='/' className="m-5"> Return </Link>
                    </div>
                </div>
            </motion.div>
        </>
    )
}

export default Skills;