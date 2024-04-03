import { FC } from 'react'

interface StatusProps {
    title: string
    percent : string
}

const Status : FC<StatusProps> = ({ title, percent }) => {
    return (
        <div className='d-flex flex-column mb-3'>
            <span className='fw-bolder'>{title}</span>
            <div className='rounded-1 bg-body-secondary overflow-hidden' style={{ height: '1rem' }}>
                <div className='h-100 bg-danger' style={{ width: percent ?? '0%' }}></div>
            </div>
        </div>
    )
}

export default Status