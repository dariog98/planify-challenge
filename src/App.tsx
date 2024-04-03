import { FC } from 'react'
import { Container, Navbar } from './components'
import { ReservationForm } from './pages'

const App : FC = () => {
    return (
        <Container>
            <ReservationForm/>
            <Navbar/>
        </Container>
    )
}

export default App
