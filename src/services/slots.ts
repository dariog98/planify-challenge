import { Slots } from '../types'

const defaultsSlots = [
    "08:00",
    "09:00",
    "09:30",
    "10:00",
    "10:30",
    "11:00",
    "11:30",
    "12:00"
]



const getAvalaibleSlots = (serviceId : number | undefined) => {
    const today : Date = new Date()
    const nextDay : Date = new Date(today.toISOString())
    nextDay.setUTCDate(nextDay.getUTCDate() + 1)

    const response : Slots[] = [
        {
            serviceId,
            date: `${today.getUTCFullYear()}-${String(today.getUTCMonth() + 1).padStart(2, '0')}-${String(today.getUTCDate()).padStart(2, '0')}`,
            availableTimeslots: defaultsSlots
        },
        {
            serviceId,
            date: `${nextDay.getUTCFullYear()}-${String(nextDay.getUTCMonth() + 1).padStart(2, '0')}-${String(nextDay.getUTCDate()).padStart(2, '0')}`,
            availableTimeslots: defaultsSlots
        }
    ]
    return response
}

const SlotsServices = {
    getAvalaibleSlots
}

export default SlotsServices