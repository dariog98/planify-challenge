import { FC, useContext } from 'react'
import { ReservationFormContext } from '../providers/ReservationFormProvider'
import Status from './Status'
import Pagination from './Pagination'
import { FORM_TABS } from '../../constants/formTabs'

const ConfirmTab : FC = () => {
    const { currentService, currentDateTime, handleTab, handleConfirm } = useContext(ReservationFormContext)

    return (
        <div className='d-flex flex-column justify-content-between gap-3 h-100'>
            <div className='overflow-x-auto'>
                <Status title='Confirm reservation' percent='75%'/>

                <div className='card rounded-0'>
                    <div className='card-body'>
                        {`Service: ${currentService?.name}`}
                        <div>{`Date: ${currentDateTime?.toLocaleString('en', { timeZone: 'UTC' })}`}</div>
                    </div>
                </div>
            </div>

            <Pagination>
                <div className='d-flex justify-content-between'>
                    <button className='btn btn-secondary' onClick={() => handleTab(FORM_TABS.DateTime)}>
                        Prev
                    </button>
                    <button className='btn btn-secondary' onClick={handleConfirm}>
                        Confirm
                    </button>
                </div>
            </Pagination>
        </div>
    )
}

export default ConfirmTab