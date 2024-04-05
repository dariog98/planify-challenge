export interface Service {
    id: number
    name: string
    description: string
    category: string
}

export interface Category {
    description: string
    services: Service[]
}

export interface Slots {
    serviceId: number | undefined
    date: string
    availableTimeslots: string[]
}

export interface Reservation {
    service: Service | undefined
    dateTime: Date | undefined
}