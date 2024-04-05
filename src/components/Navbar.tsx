import { faMugHot } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { FC } from 'react'
import { Link } from 'react-router-dom'
import { useLocation } from 'react-router-dom'
import { IconProp } from '@fortawesome/fontawesome-svg-core'
import APP_ROUTES from '../constants/routes'

interface NavButtonProps {
    route: string
    icon: IconProp
    text: string
}

const NavButton : FC<NavButtonProps> = ({ route, icon, text }) => {
    const location = useLocation()
    const isActive = location.pathname === route

    return (
        <Link to={route} className={`nav-button ${isActive ? 'active' : ''}`}>
            <FontAwesomeIcon icon={icon} size='2x'/>
            {text}
        </Link>
    )
}

const Navbar : FC = () => {
    return (
        <nav className='d-flex gap-3 justify-content-center'>
            <NavButton
                route={APP_ROUTES.Home}
                icon={faMugHot}
                text='Reservation'
            />
            <NavButton
                route={APP_ROUTES.MyReservations}
                icon={faMugHot}
                text='My reservations'
            />
        </nav>
    )
}

export default Navbar