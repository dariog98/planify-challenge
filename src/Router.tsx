import { createBrowserRouter } from 'react-router-dom'
import { Container, Navbar } from './components'
import { MyReservations, ReservationForm } from './pages'
import APP_ROUTES from './constants/routes'

const Router = createBrowserRouter([
    {
        path: APP_ROUTES.Home,
        element: (
            <Container>
                <ReservationForm/>
                <Navbar/>
            </Container>
        )
    },
    {
        path: APP_ROUTES.MyReservations,
        element: (
            <Container>
                <MyReservations/>
                <Navbar/>
            </Container>
        )
    }
])

export default Router