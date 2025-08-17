import { Link } from "react-router-dom";
import NameArea from './nameArea'
import MainMenu from './mainMenu'
import { AnimatePresence, motion } from 'framer-motion'

export default () => {
    return (
        <>
            <motion.div
                key="home"
                initial={{ x: '100%', opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: '100%', opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="d-flex justify-content-center align-items-center w-100 h-100"
            >
                <div className="backgroundFrame">
                    <div className="container row d-flex flex-row align-items-center justify-content-center">
                        <div className="col-lg-6 col-md-12 col-sm-12 mt-5">
                            <NameArea/>
                        </div>
                        <div className="col-lg-6 col-md-12 col-sm-12 mt-5">
                            <MainMenu/>
                        </div>
                    </div>
                </div>
            </motion.div>
        </>
    )
}
