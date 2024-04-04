import { useEffect, useState, useContext } from 'react'
import { ReservationFormContext } from '../components/providers/ReservationFormProvider'
import { SlotsServices } from '../services'
import { Slots } from '../types'

const useSlots = () => {
    const [isLoading, setIsLoading] = useState(false)
    const [data, setData] = useState<Slots[]>()
    const { currentService: service } = useContext(ReservationFormContext)

    const getSlots = () => {
        try {
            // This supposed to be a fetch call to a API
            setIsLoading(true)
            const response = SlotsServices.getAvalaibleSlots(service?.id)
            setData(response)
        } catch (error) {
            //
        } finally {
            setIsLoading(false)
        }
    }

    useEffect(() => {
        getSlots()
    }, [service])

    return {
        isLoading,
        data
    }
}

export default useSlots