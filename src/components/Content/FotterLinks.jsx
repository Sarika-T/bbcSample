import { NavLink} from "react-router-dom";
import './FotterLinks.scss';
import { navItems, navItems2 } from "../Common/LinksBBC";


export default function FotterLinks() {

    return(
        <div className="fotterlinks">
        <div>
            <nav className="fotter-nav">
            <ul className="fotter-nav-list">
            {navItems.map(({ label, to }) => (
                <NavLink
                    to={to}
                    end
                    className={({ isActive }) =>
                    isActive ? "fotter-link-active" : "fotter-link"
                    }
                >
                    {label}
                </NavLink>
            ))}
            </ul>
            </nav>
        </div>
            <div className="fotterlinks-break"></div>
            <nav className="fotterdown-nav">
            <ul className="fotterdown-nav-list">
            {navItems2.map(({ label, path }) => (
                <NavLink
                    to={path}
                    end
                    className={({ isActive }) =>
                    isActive ? "fotterdown-link-active" : "fotterdown-link"
                    }
                >
                    {label}
                </NavLink>
            ))}
            </ul>
            </nav>
            <div className="fotterlinks-bottom">
                <span className="fotterlinks-bottom-copy">Copyright &copy; 2025 BBC. </span>
                <span className="fotterlinks-bottom-text">The BBC is not responsible for the content of external sites. </span>
                <span className="fotterlinks-bottom-text2">Read about our approach to external linking.</span>            
            </div>
        </div>
    )
}