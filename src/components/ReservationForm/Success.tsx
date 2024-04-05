import { FC, useContext } from 'react'
import { ReservationFormContext } from '../providers/ReservationFormProvider'
import Status from './Status'
import Pagination from './Pagination'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck } from '@fortawesome/free-solid-svg-icons'

const SuccessTab : FC = () => {
    const { handleNew } = useContext(ReservationFormContext)

    return (
        <div className='d-flex flex-column justify-content-between gap-3 h-100'>
            <Status title='Completed' percent='100%'/>

            <div className='flex-grow-1 d-flex flex-column justify-content-center align-items-center gap-3'>
                <div className='success-icon text-light'>
                    <FontAwesomeIcon icon={faCheck} size='3x'/>
                </div>
                <span>Success</span>
            </div>

            {/*
            <Pagination
                firstButton={{ description: 'New Reservation', action: () => handleTab(FORM_TABS.DateTime)}}
            />
            */}
            <Pagination>
                <div className='d-flex justify-content-between'>
                    <button className='btn btn-secondary' onClick={handleNew}>
                        New reservation
                    </button>
                </div>
            </Pagination>
        </div>
    )
}

export default SuccessTab