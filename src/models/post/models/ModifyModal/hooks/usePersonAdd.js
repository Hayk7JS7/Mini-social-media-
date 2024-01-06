import { useEffect, useState } from "react"


const usePersonAdd = () => {
    const [add, setAdd] = useState(false)
    const [addPerson, setAddPerson] = useState([])
    // useEffect(() => {

    // }, [])

    return {
        add, 
        setAdd,
        addPerson,
        setAddPerson
    }
}

export default usePersonAdd