import { Context, FC, ReactElement, ReactNode, createContext, useState } from 'react'
import { FORM_TABS } from '../../constants/formTabs'
import { Service } from '../../types'

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
}

export const ReservationFormContext : Context<ReservationForm> = createContext<ReservationForm>({
    currentTab: FORM_TABS.Service,
    handleTab: () => {},
    currentService: undefined,
    handleService: () => {},
    currentDateTime: undefined,
    handleDateTime: () => {},
    handleConfirm: () => {}
})

const ReservationFormProvider : FC<ReservationFormProviderProps> = ({ children }) => {
    const [tab, setTab] = useState<number>(FORM_TABS.Service)
    const [service, setService] = useState<Service | undefined>()
    const [dateTime, setDateTime] = useState<Date | undefined>()

    const handleConfirm = () => {
        console.log({
            service,
            dateTime
        })
    }

    const reservationForm : ReservationForm = {
        currentTab: tab,
        handleTab: setTab,
        currentService: service,
        handleService: setService,
        currentDateTime: dateTime,
        handleDateTime: setDateTime,
        handleConfirm
    }

    return (
        <ReservationFormContext.Provider value={reservationForm}>
            {children}
        </ReservationFormContext.Provider>
    )
}

export default ReservationFormProvider