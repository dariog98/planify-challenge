import { faMugHot } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { FC } from 'react'
import { Link } from 'react-router-dom'
import { useLocation } from 'react-router-dom'
import APP_ROUTES from '../constants/routes'

const Navbar : FC = () => {
    const location = useLocation()
    console.log(location)

    return (
        <nav className='d-flex gap-3 justify-content-center'>

            <Link to={APP_ROUTES.Home} className={`nav-button ${location.pathname === APP_ROUTES.Home ? 'active' : ''}`}>
                <FontAwesomeIcon icon={faMugHot} size='2x'/>
                Reservar
            </Link>

            <Link to={APP_ROUTES.MyReservations} className={`nav-button ${location.pathname === APP_ROUTES.MyReservations ? 'active' : ''}`}>
                <FontAwesomeIcon icon={faMugHot} size='2x'/>
                Mis turnos
            </Link>

        </nav>
    )
}

export default Navbar