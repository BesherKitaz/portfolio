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
            className="appContainer"
            >
                <div className="appContainer" >
                    <div className="row w-100 d-flex align-items-center justify-content-center">
                    <div className="col-6">
                        <div className='nameContainer'>
                        <NameArea/>
                        </div>
                    </div>
                    <div className='col-6'>
                        <div className='mx-auto'>
                        <MainMenu/>
                        </div>
                    </div>
                    </div>
                </div>
            </motion.div>
        </>
    )
}