import { Context, FC, ReactElement, ReactNode, createContext, useState } from 'react'
import { FORM_TABS } from '../../constants/formTabs'
import { Reservation, Service } from '../../types'
import { useLocalStorage } from '../../hooks'

interface ReservationFormProviderProps {
    children: string | ReactElement | ReactNode
}

interface ReservationForm {
    currentTab: number
    handleTab: (v: number) => void
    currentService: Service | undefined
    handleService: (v: Service | undefined) => void
    currentDateTime: Date | undefined
    handleDateTime: (v: Date | undefined) => void
    handleConfirm: () => void
    handleNew: () => void
}

export const ReservationFormContext : Context<ReservationForm> = createContext<ReservationForm>({
    currentTab: FORM_TABS.Service,
    handleTab: () => {},
    currentService: undefined,
    handleService: () => {},
    currentDateTime: undefined,
    handleDateTime: () => {},
    handleConfirm: () => {},
    handleNew: () => {}
})

const ReservationFormProvider : FC<ReservationFormProviderProps> = ({ children }) => {
    const reservationStorage = useLocalStorage<Reservation[]>('RESERVATIONS')
    const [tab, setTab] = useState<number>(FORM_TABS.Service)
    const [service, setService] = useState<Service | undefined>()
    const [dateTime, setDateTime] = useState<Date | undefined>()

    const handleConfirm = () => {
        const newReservation : Reservation = {
            service,
            dateTime
        }
        const reservations : Reservation[] = reservationStorage.getItem() ?? []
        reservations.push(newReservation)
        reservationStorage.setItem(reservations)
        setTab(FORM_TABS.Success)
    }

    const handleNew = () => {
        setService(undefined)
        setDateTime(undefined)
        setTab(FORM_TABS.Service)
    }

    const reservationForm : ReservationForm = {
        currentTab: tab,
        handleTab: setTab,
        currentService: service,
        handleService: setService,
        currentDateTime: dateTime,
        handleDateTime: setDateTime,
        handleConfirm,
        handleNew
    }

    return (
        <ReservationFormContext.Provider value={reservationForm}>
            {children}
        </ReservationFormContext.Provider>
    )
}

export default ReservationFormProvider