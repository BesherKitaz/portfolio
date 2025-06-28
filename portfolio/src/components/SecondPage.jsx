import { Link } from "react-router-dom"
import { motion } from 'framer-motion'

export default function() {
    return (
    <>
        <motion.div
                key="home"
                initial={{ x: '-100%', opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: '100%', opacity: 10 }}
                transition={{ duration: 0.5 }}
                className="appContainer"
                >
            Hello World!
            This is just for testing the navogation
            <Link to='/'>Return</Link>
        </motion.div>
    </>
    )

}