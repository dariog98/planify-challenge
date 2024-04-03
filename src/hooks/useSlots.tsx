import { useEffect, useState, useContext } from 'react'
import { ReservationFormContext } from '../components/providers/ReservationFormProvider'
import { SlotsServices } from '../services'
import { Slots } from '../services/slots'

const useSlots = () => {
    const [isLoading, setIsLoading] = useState(false)
    const [data, setData] = useState<Slots[]>()
    const { currentService: serviceId } = useContext(ReservationFormContext)

    const getSlots = () => {
        try {
            setIsLoading(true)
            const response = SlotsServices.getAvalaibleSlots(serviceId)
            setData(response)
        } catch (error) {
            //
        } finally {
            setIsLoading(false)
        }
    }

    useEffect(() => {
        getSlots()
    }, [serviceId])

    return {
        isLoading,
        data
    }
}

export default useSlots