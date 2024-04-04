import { useEffect } from 'react'
import { useState } from 'react'
import { Category, Service } from '../types'
import { CategoriesServices } from '../services'

const useCategories = () => {
    const [data, setData] = useState<Category[] | undefined>()

    const getCategories = () => {
        // This supposed to be a fetch call to a API
        const response = CategoriesServices.getAllCategories()

        const categories : Record<string, Service[]> = response.services.reduce((accumulator : Record<string, Service[]>, service : Service) => {
            if (!accumulator[service.category]) {
                accumulator[service.category] = []
            }
            accumulator[service.category].push(service)
            return accumulator
        }, {})

        const data : Category[] = Object.keys(categories).map((key : string) => ({ description: key, services: categories[key] }))
        setData(data)
    }

    useEffect(() => {
        getCategories()
    }, [])

    return {
        data
    }
}

export default useCategories