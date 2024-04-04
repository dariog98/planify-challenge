import { FC, ReactElement, ReactNode } from 'react'
import { PaginationButton } from '../../types'
/*
interface PaginationProps {
    firstButton?: PaginationButton
    lastButton?: PaginationButton
}

const Pagination : FC<PaginationProps> = ({ firstButton, lastButton }) => {
    return (
        <div className='d-flex justify-content-between py-2 border-3 border-top border-bottom'>
            <button
                className={`btn btn-secondary ${firstButton ? firstButton.isDisabled() && 'disabled' : ''}`}
                style={{ visibility: firstButton ? 'visible' : 'hidden'}}
                onClick={firstButton?.action}
            >
                {firstButton?.description}
            </button>
            <button
                className='btn btn-secondary'
                style={{ visibility: lastButton ? 'visible' : 'hidden'}}
                onClick={lastButton?.action}
            >
                {lastButton?.description}
            </button>
        </div>
    )
}
*/

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