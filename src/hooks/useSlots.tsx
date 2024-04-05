import { useEffect, useState, useContext } from 'react'
import { ReservationFormContext } from '../components/providers/ReservationFormProvider'
import { SlotsServices } from '../services'
import { Slots } from '../types'

const useSlots = () => {
    const [data, setData] = useState<Slots[]>()
    const { currentService: service } = useContext(ReservationFormContext)

    const getSlots = () => {
        // This supposed to be a fetch call to a API
        const response = SlotsServices.getAvalaibleSlots(service?.id)
        setData(response)
    }

    useEffect(() => {
        getSlots()
    }, [service])

    return {
        data
    }
}

export default useSlots