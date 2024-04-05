import { Reservation, Slots } from '../types'

const defaultsSlots = [
    "08:00",
    "08:30",
    "09:00",
    "09:30",
    "10:00",
    "10:30",
    "11:00",
    "11:30",
    "12:00"
]

const getAvalaibleSlots = (serviceId : number | undefined) : Slots[] => {
    const today : Date = new Date()
    const nextDay : Date = new Date(today.toISOString())
    nextDay.setUTCDate(nextDay.getUTCDate() + 1)
    const userReservationsStorage : string | null = window.localStorage.getItem('RESERVATIONS')
    const userReservations : Reservation[] = userReservationsStorage ? JSON.parse(userReservationsStorage) : []
    const unavailableSlots = userReservations.filter(reservation => reservation.service?.id === serviceId).reduce((accumulator: Record<string, string[]>, reservation) => {
        const date = new Date(reservation.dateTime ?? '')
        const stringDate = `${date.getUTCFullYear()}-${String(date.getUTCMonth() + 1).padStart(2, '0')}-${String(date.getUTCDate()).padStart(2, '0')}`
        const stringTime =`${String(date.getUTCHours()).padStart(2, '0')}:${String(date.getUTCMinutes()).padStart(2, '0')}`
        if (!accumulator[stringDate]) {
            accumulator[stringDate] = []
        }
        accumulator[stringDate].push(stringTime)
        return accumulator
    }, {})

    const stringToday = `${today.getUTCFullYear()}-${String(today.getUTCMonth() + 1).padStart(2, '0')}-${String(today.getUTCDate()).padStart(2, '0')}`
    const stringNextDay = `${nextDay.getUTCFullYear()}-${String(nextDay.getUTCMonth() + 1).padStart(2, '0')}-${String(nextDay.getUTCDate()).padStart(2, '0')}`

    const response : Slots[] = [
        {
            serviceId,
            date: stringToday,
            availableTimeslots: defaultsSlots.filter(time => !(unavailableSlots[stringToday] && unavailableSlots[stringToday].includes(time)))
        },
        {
            serviceId,
            date: stringNextDay,
            availableTimeslots: defaultsSlots.filter(time => !(unavailableSlots[stringNextDay] && unavailableSlots[stringNextDay].includes(time)))
        }
    ]
    return response
}

const SlotsServices = {
    getAvalaibleSlots
}

export default SlotsServices