import { Link } from "react-router-dom"
import { motion } from 'framer-motion'

import '../css/aboutme.css'


export default function() {
    const text =`I’m Besher, a Computer Science student with a passion for building practical, user-friendly technology. My academic focus is backed by hands-on experience through multiple internships, including web development with my college’s Student Software Development Team, research roles, and startup collaboration.

I enjoy creating solutions that combine clean design, efficient code, and real-world impact—whether that’s developing web applications, mentoring students in robotics competitions, or exploring emerging technologies. Beyond programming, I bring a global perspective as an international student and a strong foundation in teamwork, adaptability, and cross-cultural communication.

With skills spanning Java, web development, and collaborative project work, I’m always eager to tackle new challenges, learn continuously, and contribute meaningfully to projects that make a difference.`
    return (
    <>
        <motion.div
                key="home"
                initial={{ x: '0%', opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: '0%', opacity: 0 }}
                transition={{ duration: 0.5 }}
                >
                <div className="aboutme">
                    <div className="container mt-5"> 
                        <div>
                            <h1> About Me </h1>
                            <p className="glassyFrame"> {text} </p>
                            <div className="mb-4"><Link to='/'> Return </Link></div>
                        </div>
                    </div>
                </div>
        </motion.div>
    </> 
    )
}

