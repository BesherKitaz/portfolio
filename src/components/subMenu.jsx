import { Link } from "react-router-dom";
import '../css/subMenu.css'
const SubMenu = () => {
    return (
        <div className="subMenu">
            <ul>
                <li> <a href='https://github.com/BesherKitazBerea/portfolio' target="_blank" rel="noopener noreferrer"> Site's Repository </a> </li>
                <li><a href="public/Resume - Feb 11th.pdf" download>Download Resume</a></li>
            </ul>
        </div>
    );
};

export default SubMenu;
