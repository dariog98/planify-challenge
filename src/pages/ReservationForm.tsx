import ReservationFormProvider from '../components/providers/ReservationFormProvider'
import { Form } from '../components/ReservationForm'

const ReservationForm = () => {
    return (
        <ReservationFormProvider>
            <Form/>
        </ReservationFormProvider>
    )
}

export default ReservationForm