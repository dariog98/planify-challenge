import { useEffect, useState } from 'react'
import { useLocalStorage } from './'
import { Reservation } from '../types'

const useReservations = () => {
    const reservations = useLocalStorage<Reservation[]>('RESERVATIONS')
    const [data, setData] = useState<Reservation[]>()

    const getReservations = () => {
        const response = reservations.getItem() ?? []
        setData(response)
    }

    useEffect(() => {
        getReservations()
    }, [])
    
    return {
        data
    }
}

export default useReservations