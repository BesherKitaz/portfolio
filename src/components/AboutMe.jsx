import { Link } from "react-router-dom"
import { motion } from 'framer-motion'

import '../css/aboutme.css'


export default function() {
    const text =`Hi! I am Besher, a Computer Science student passionate about building thoughtful, practical software that people actually use. I’m especially interested in web development, problem-solving, and turning complex ideas into functional systems. Through coursework, projects, and hands-on experience, I’ve developed skills in programming, full-stack development, and logical thinking, while continuously pushing myself to learn new tools and frameworks.

Beyond coding, I care about leadership, collaboration, and creating welcoming spaces, whether through student organizations, team projects, or mentoring roles. I’m motivated by challenges, enjoy working with others, and am always looking for opportunities to grow, contribute, and make a meaningful impact through technology.`
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

