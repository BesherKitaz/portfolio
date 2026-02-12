import { Link } from "react-router-dom";
import NameArea from './nameArea'
import MainMenu from './mainMenu'
import { AnimatePresence, motion } from 'framer-motion'
import SubMenu from "./subMenu";


export default () => {
    return (
        <motion.div
            key="home"
            initial={{ x: '0%', opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: '0%', opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="d-flex justify-content-center align-items-center w-100 h-100"
        >
            <div className="backgroundFrame">
                <div className="container row d-flex flex-rcolumn align-items-center justify-content-center" >
                    <div><NameArea/></div>
                    <div><MainMenu/></div>
                    <div><SubMenu/></div>
                </div>
            </div>
        </motion.div>
    )
}
