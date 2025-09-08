
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import '../css/experiences-qualifications.css'

const experiences = [
    {
        title: "Full Stack Software Development Intern",
        date: "June 2025 - August 2025",
        org: "Software Development Team, Berea College",
        bulletPoints: [
            "Worked with a team of 18 developers enhancing 2 critical systems at Berea College",
            "Improved Employment Status Form system, streamlining workflows for 1700+ students and 23 administrators, including refactoring the structure of the project to follow programming standards",
            "Upgraded the Community Engagement Center (CELTS) Website, improving interactive user experience using technologies like bootstrap, AJAX, and Flask endpoints",
            "Implemented role-based data visibility by updating database schemas, UI components, and backend logic for secure and efficient information access"
        ]
    },
    {
        title: "Part-time Mentor and Web Developer",
        date: "Sep 2024 - Present",
        org: "RatFight Robotics Team, Berea College",
        bulletPoints: [
            "Developing a responsive website for the team using modern web technologies like HTML, CSS, JavaScript and React to represent the team",
            "Mentored 3 high school students on working with Java and robotics software technologies",
            "Worked with the team on improving our robot technology for First Robotics Competition",
        ]
    },
    {
        title: "Volunteer Python Instructor",
        date: "Oct 2023 - Nov 2024",
        org: "Paper Airplanes, Inc.",
        bulletPoints: [
            "Taught a group of 15 female students per semester in basic-to-intermediate concepts in Python",
            "Contributed and organized the curriculum design with a team of mentors which included topics of basic programming, machine learning, and data management and analysis",
        ]
    },
]
const Experience = () => {
    return (
        <motion.div
            key="home"
            initial={{ x: '0%', opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: '0%', opacity: 0 }}
            transition={{ duration: 0.5 }}
            > 
            <div className="experiences-qualifications">
                <div className="container">
                    <div className="experiences w-100 m-0 p-0">
                        <h1 className="mb-5 mt-5 f"> Experience </h1>
                            <div className="bullet-points"> 
                                <ul className="w-75 ms-5">
                                    {experiences.map((item, index) => (
                                    <li key={item.title} className="glassyFrame m-4 p-4 experience">
                                        <div className="exp-title-and-date">
                                            <h3 className="exp-title"> {item.title} </h3>
                                            <h4 className="exp-date"> {item.date} </h4>
                                        </div>
                                        <div className="org"> <em> {item.org} </em> </div>
                                        <div className="bullet-points">
                                            <ul>
                                                {item.bulletPoints.map((point, index) => (
                                                    <li key={index}>{point}</li>
                                                ))}
                                            </ul>
                                        </div>
                                    </li>
                                    ))}

                                </ul>
                            </div>
                        </div>
                    <Link to='/' className="mb-5"> Return </Link>
                </div>
            </div>
        </motion.div>
    )
}

export default Experience;