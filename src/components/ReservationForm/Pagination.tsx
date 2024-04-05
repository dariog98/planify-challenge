import { FC, ReactElement, ReactNode } from 'react'

interface PaginationProps {
    children: string | ReactElement | ReactNode
}

const Pagination : FC<PaginationProps> = ({ children }) => {
    return (
        <div className='py-2 border-3 border-top border-bottom'>
            {children}
        </div>
    )
}

export default Pagination