import { Link, NavLink } from "react-router-dom"
import styles from './Navigation.module.css'
export const Navigation = () => {

    const setStyles = ({ isActive }) => {
        return isActive ? styles['active-link']
            : undefined;
    }
    return (
        <nav>
            <ul>
                <li><NavLink to="/"  className={setStyles}>Home</NavLink></li>
                <li><NavLink to="/about"  className={setStyles}>About</NavLink></li>
                <li><NavLink
                    to="/pricing"
                    className={setStyles}
                    // style={({ isActive }) => ({
                    //     background: isActive ? 'lightblue' : 'lightgrey'
                    // })}
                >
                    Pricing
                </NavLink>
                </li>
                <li><NavLink
                    to="/contacts"
                    className={setStyles}
                    // style={(navLinkProps => {
                    //     return navLinkProps.isActive
                    //         ? { backgroundColor: 'lightblue' } : undefined
                    // })}
                >
                    Contacts
                </NavLink>
                </li>

                <li>
                    <NavLink
                        to="/products/2"
                        // style={{ backgroundColor: 'red' }}
                        className={setStyles}
                    >
                        Products
                    </NavLink>
                </li>

                <li><NavLink
                    to="/millenium-falcon"
                    className={setStyles}
                >
                    Millenium Falcon
                </NavLink>
                </li>

            </ul>
        </nav>
    )
}