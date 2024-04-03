import { useState } from 'react'

const useAccordion = () => {
    const [show, setShow] = useState(false)

    const toggleShow = () => {
        setShow(current => !current)
    }

    return {
        show,
        toggleShow
    }
}

export default useAccordion