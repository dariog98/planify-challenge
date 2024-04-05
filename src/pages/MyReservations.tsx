import useReservations from '../hooks/useReservations'
import { Reservation } from '../types'

const MyReservations = () => {
    const { data } = useReservations()

    return (
        <main className='flex-grow-1 container my-4'>
            <span className='fw-bolder'>My reservations</span>
            {
                data && data?.length > 0 ?
                <div className='d-flex flex-column gap-3'>
                    {
                        data?.map((reservation: Reservation, index: number) =>
                            <div key={index} className='card rounded-0'>
                                <div className='card-body'>
                                    <div>{`Service: ${reservation.service?.name}`}</div>
                                    <div>{`Date: ${reservation.dateTime?.toLocaleString('en', { timeZone: 'UTC' })}`}</div>
                                </div>
                            </div>
                        )
                    }
                </div>
                :
                <div className='h-100 d-flex flex-column justify-content-center align-items-center'>
                    There is no reservations yet
                </div>
            }
        </main>
    )
}

export default MyReservations