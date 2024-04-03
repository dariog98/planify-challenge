import { FC } from 'react'

interface PaginationProps {
    handlePrev: () => void
    handleNext: () => void
}

const Pagination : FC<PaginationProps> = ({ handlePrev, handleNext }) => {
    return (
        <div className='d-flex justify-content-between py-2 border-3 border-top border-bottom'>
            <button className='btn btn-secondary' onClick={handlePrev}>Prev</button>
            <button className='btn btn-secondary' onClick={handleNext}>Next</button>
        </div>
    )
}

export default Pagination