import { Link } from "react-router-dom";
import '../css/subMenu.css'
const SubMenu = () => {
    return (
        <div className="subMenu">
            <ul>
                <li><Link to="/">Contact</Link></li>
                <li> <a href='https://github.com/BesherKitazBerea/portfolio' target="_blank" rel="noopener noreferrer"> GitHub Repository </a> </li>
                <li><Link to="/contact">Download Resume</Link></li>
            </ul>
        </div>
    );
};

export default SubMenu;
