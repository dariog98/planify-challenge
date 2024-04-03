import { useContext } from 'react'
import { ReservationFormContext } from '../providers/ReservationFormProvider'
import CategoriesTab from './Categories'
import SlotsTab from './Slots'
import ConfirmTab from './Confirm'

const TABS = [CategoriesTab, SlotsTab, ConfirmTab]

const Form = () => {
    const { currentTab } = useContext(ReservationFormContext)
    const CurrentTab = TABS[currentTab]
    
    return (
        <main className='flex-grow-1 container my-4 overflow-scroll'>
            <CurrentTab/>
        </main>
    )
}

export default Form