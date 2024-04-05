import { FC } from 'react'
import {  RouterProvider } from 'react-router-dom'
import Router from './Router'

const App : FC = () => {
    return <RouterProvider router={Router}/>
}

export default App
