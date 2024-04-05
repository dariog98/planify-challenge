import { useEffect, useState } from 'react'
import { useLocalStorage } from './'
import { Reservation } from '../types'

const useReservations = () => {
    const reservations = useLocalStorage<Reservation[]>('RESERVATIONS')
    const [data, setData] = useState<Reservation[]>()

    const getReservations = () => {
        // This supposed to be a fetch call to a API
        const response = reservations.getItem() ?? []
        setData(response.map(reservation => ({
            service: reservation.service,
            // TODO: give a better fix to the error "No overloads matches this call"
            // The error occurs because reservation.dateTime can be undefined and the new Date() constructor does not support null values
            dateTime: reservation.dateTime ? new Date(reservation.dateTime) : reservation.dateTime 
        })))
    }

    useEffect(() => {
        getReservations()
    }, [])
    
    return {
        data
    }
}

export default useReservations