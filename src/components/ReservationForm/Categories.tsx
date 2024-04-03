import { FC, useContext } from 'react'
import { useAccordion, useCategories } from '../../hooks'
import { ReservationFormContext } from '../providers/ReservationFormProvider'
import { FORM_TABS } from '../../constants/formTabs'
import { Category, Service } from '../../types'
import Status from './Status'

interface ServiceProps {
    data: Service
}

const ServiceItem : FC<ServiceProps> = ({ data }) => {
    const { currentService, handleService } = useContext(ReservationFormContext)
    const isCurrent = currentService?.id == data.id

    return (
        <div className='card'>
            <div className='card-body'> 
                <h6>{data.name}</h6>
                <span>{data.description}</span>
                <div className='d-flex justify-content-end'>
                    <button
                        className={`btn btn-secondary ${isCurrent ? 'active' : '' }`}
                        onClick={() => handleService(isCurrent ? undefined : data)}
                    >
                        {isCurrent ? 'Selected' : 'Select' }
                    </button>
                </div>
            </div>
        </div>
    )
}

const CategoryItem : FC<{ data: Category }> = ({ data }) => {
    const { show, toggleShow } = useAccordion()

    return (
            <div className='accordion-item'>
                <h2 className='accordion-header'>
                    <button className={`accordion-button m-0 p-2 ${show ? '' : 'collapsed'}`} onClick={toggleShow}>
                        {data.description}
                    </button>
                </h2>
                <div className={`accordion-collapse ${show ? 'collapsion show' : 'collapse'}`}>
                    <div className='accordion-body d-flex flex-column gap-3'>
                        {
                            data.services.map(service => <ServiceItem key={service.id} data={service}/>)
                        }
                    </div>
                </div>
            </div>
    )
}

const CategoriesTab : FC = () => {
    const { data } = useCategories()
    const { currentService, handleTab } = useContext(ReservationFormContext)

    return (
        <div className='d-flex flex-column justify-content-between gap-3 h-100'>
            
            <div className='overflow-auto'>
                <Status title='Select service' percent='25%'/>
                <div className='card rounded-0 border-secondary'>
                    <div className='card-body'>
                        <span>Categories</span>
                        <div className='accordion'>
                            {
                                data && 
                                data.map((category: Category, index: number) =>
                                    <CategoryItem
                                        key={index}
                                        data={category}
                                    />
                                )
                            }
                        </div>
                    </div>
                </div>
            </div>

            <div className='d-flex justify-content-between'>
                <div></div>
                {
                    currentService &&
                    <button className='btn btn-secondary' onClick={() => handleTab(FORM_TABS.DateTime)}>Next</button>
                }
            </div>

        </div>
    )
}

export default CategoriesTab