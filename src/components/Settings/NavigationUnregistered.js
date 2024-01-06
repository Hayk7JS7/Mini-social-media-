import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const NavigationUnregistered = () => {
    const navigate = useNavigate()
    useEffect(() => {
        navigate('/register')
    }, [])
}

export default NavigationUnregistered
