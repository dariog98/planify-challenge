import { FC, useContext } from 'react'
import { useSlots } from '../../hooks'
import { Slots } from '../../types'
import { ReservationFormContext } from '../providers/ReservationFormProvider'
import { FORM_TABS } from '../../constants/formTabs'
import Pagination from './Pagination'
import Status from './Status'

const SlotsDate : FC<{data: Slots}>= ({ data }) => {
    const { currentDateTime, handleDateTime } = useContext(ReservationFormContext)
    const [yy, mm, dd] : number[] = data.date.split('-').map((v : string) => Number(v))
    const date : Date = new Date(Date.UTC(yy, mm - 1, dd))
    
    return (
        <>
            <span>{date.toLocaleString('en', { month: 'long', day: '2-digit', timeZone: 'UTC' })}</span>
            <div className='d-grid gap-3' style={{ gridTemplateColumns: '1fr 1fr' }}>
                {
                    data.availableTimeslots.map((time : string, index : number) => {
                        const [hh, mm] : number[] = time.split(':').map((v : string) => Number(v))
                        const dt : Date = new Date(Date.UTC(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate(), hh, mm))
                        const isCurrent = currentDateTime?.getTime() == dt.getTime()
                        return (
                            <button
                                key={index}
                                className={`btn btn-system ${isCurrent ? 'active' : ''}`}
                                onClick={() => handleDateTime(dt)}
                            >
                                {time}
                            </button>
                        )
                    })
                }
            </div>
        </>
    )
}

const SlotsTab = () => {
    const { handleTab, currentDateTime } = useContext(ReservationFormContext) 
    const { data } = useSlots()
    
    return (
        <div className='d-flex flex-column justify-content-between gap-3 h-100'>
            <div className='overflow-x-auto'>
                <Status title='Select time' percent='50%'/>
                <div className='card rounded-0'>
                    <div className='card-body'>
                        <div className=' d-flex flex-column gap-2'>
                            {
                                data &&
                                data.map((slotsDate: Slots, index: number) =>
                                    <SlotsDate key={index} data={slotsDate}/>    
                                )
                            }
                        </div>
                    </div>
                </div>
            </div>

            <Pagination>
                <div className='d-flex justify-content-between'>
                    <button className='btn btn-secondary' onClick={() => handleTab(FORM_TABS.Service)}>
                        Prev
                    </button>
                    <button className={`btn btn-secondary ${currentDateTime ? '' : 'disabled'}`} onClick={() => handleTab(FORM_TABS.Confirm)}>
                        Next
                    </button>
                </div>
            </Pagination>

        </div>
    )
}

export default SlotsTab