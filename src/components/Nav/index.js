import React from 'react'
import {Link, useLocation} from 'react-router-dom'

const styles = {
    host: {
        textAlign: 'center',
        justifyContent: 'center',
        marginBottom: '64px'
    },
    navActive: {
        color: 'orange'
    }
}

const Nav = (props) => {
    const {
        currentCategory
    } = props

    let location = useLocation()
    const isActive = (link) => {
        return location.pathname === link ? styles.navActive : {}
    }

    return (
        <header style={styles.host} className="flex-row px-1">
            <nav>
                <ul className="flex-row">
                    <li className="mx-2">
                        <Link to='/' style={isActive('/')}>
                            About me
                        </Link>
                    </li>
                    <li className="mx-2">
                        <Link to='/portfolio' style={isActive('/portfolio')}>
                            Portfolio
                        </Link>
                    </li>
                    <li className="mx-2">
                        <Link to='/contact' style={isActive('/contact')}>Contact</Link>
                    </li>
                    <li className="mx-2">
                        <Link to='/resume' style={isActive('/resume')}>Resume</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Nav
