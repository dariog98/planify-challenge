import { FC, useContext } from 'react'
import { ReservationFormContext } from '../providers/ReservationFormProvider'
import Status from './Status'
import Pagination from './Pagination'
import { FORM_TABS } from '../../constants/formTabs'

const ConfirmTab : FC = () => {
    const { currentService, currentDateTime, handleTab, handleConfirm } = useContext(ReservationFormContext)

    return (
        <div className='d-flex flex-column justify-content-between gap-3 h-100'>
            <div className='overflow-auto'>
                <Status title='Confirm reservation' percent='75%'/>

                <div className='card rounded-0'>
                    <div className='card-body'>
                        {`Service: ${currentService?.name}`}
                        <div>{`Date: ${currentDateTime?.toLocaleString('en', { timeZone: 'UTC' })}`}</div>
                    </div>
                </div>
            </div>

            <Pagination
                handlePrev={() => handleTab(FORM_TABS.DateTime)}
                handleNext={handleConfirm}
            />
        </div>
    )
}

export default ConfirmTab