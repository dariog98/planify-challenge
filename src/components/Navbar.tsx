import { faMugHot } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { FC } from 'react'

const Navbar : FC = () => {
    return (
        <nav className='d-flex gap-3 justify-content-center'>
            <div className='d-flex flex-column justify-content-center'>
                <FontAwesomeIcon icon={faMugHot} size='2x'/>
                Reservar
            </div>
            <div className='d-flex flex-column justify-content-center'>
                <FontAwesomeIcon icon={faMugHot} size='2x'/>
                Mis turnos
            </div>
        </nav>
    )
}

export default Navbar