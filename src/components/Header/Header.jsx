import { NavLink } from "react-router-dom";
import { MenuIcon } from "../../assests/icon";
import './Header.scss';
import { navItems } from "../Common/LinksBBC";
import { useState } from "react";


export default function Header() {

    const [menu,setMenu] = useState(false);
    const toggleMenu = () => {
        setMenu(prev => !prev);
    };
    return(
        <div className="header">
           <nav className="header-nav">
            <ul className="header-nav-list">
            {navItems.filter(({ label }) =>
                ['Home', 'News', 'Sport', 'Business', 'Innovation', 'Culture', 'Travel'].includes(label))
                .map(({ label, to }) => (
                <NavLink
                    to={to}
                    end
                    className={({ isActive }) =>
                    isActive ? "nav-link-active" : "nav-link"
                    }
                >
                    {label}
                </NavLink>
            ))}
            </ul>
            </nav>
            <div onClick={toggleMenu} className="header-nav-menu">
                <MenuIcon />
            </div>
            {menu && (
                <div className="header-nav-menu-extended">
                    <button onClick={toggleMenu} className="close-menu-button">✖</button>
                    <nav className="header-nav-menunav">
                        <ul className="header-nav-menu-list">
                            {navItems
                                .filter(({ label }) =>
                                    ['Earth', 'Video', 'Live'].includes(label)
                                )
                                .map(({ label, to }) => (
                                    <NavLink
                                        key={label}
                                        to={to}
                                        end
                                        className={({ isActive }) =>
                                            isActive ? "nav-link-active" : "nav-link"
                                        }
                                    >
                                        {label}
                                    </NavLink>
                                ))}
                        </ul>
                    </nav>
                </div>
            )}
        </div>
    )
}