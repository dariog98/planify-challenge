import { FC, ReactElement, ReactNode } from 'react'

interface ContainerProps {
    children: string | ReactElement | ReactNode
}

const Container : FC<ContainerProps> = ({ children }) => {
    return (
        <div className='d-flex flex-column vh-100'>
            {children}
        </div>
    )
}

export default Container