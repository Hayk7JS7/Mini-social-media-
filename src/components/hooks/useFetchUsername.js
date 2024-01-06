import { searchUsername } from "../../features/rootHome/globalSearch/searchedUserByName/api/searchUsername"
import { makeInitialStateGlobalSearch } from "../../features/rootHome/globalSearch/searchedUserByName/searchedUserByNameSlice"
import { useEffect, useState } from "react"
import { useDispatch } from "react-redux"

const useFetchUsername = () => {
  const dispatch = useDispatch()
  const [searchUserName, setSearchUserName] = useState('')
  useEffect(() => {
    dispatch(makeInitialStateGlobalSearch())
    if(searchUserName === '')return  
    const boundaryEffect = setTimeout(() => {
        dispatch(searchUsername(searchUserName))
    }, 2000)
    return (() => clearTimeout(boundaryEffect))
  }, [searchUserName])

  return {
    searchUserName, setSearchUserName
  }
}

export default useFetchUsername