const useSetToken = ({newToken}) => {
    window.localStorage.removeItem("token")
    return window.localStorage.setItem("token", newToken)
}

export default useSetToken