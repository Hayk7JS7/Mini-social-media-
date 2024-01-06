import jwtDecode from "jwt-decode"

const checkToken = () => {
    const myToken = window.localStorage.getItem('token')
    if(!myToken) {
        return false
    }

    const decodedToken = jwtDecode(myToken)

    const currentDate = new Date().getTime() / 1000
    const isTokenValid = decodedToken.exp * 1000 > currentDate
    
    if(decodedToken.exp && decodedToken.exp < currentDate) {

        window.localStorage.removeItem('token')
        return false
    }
    return isTokenValid
}

export default checkToken
