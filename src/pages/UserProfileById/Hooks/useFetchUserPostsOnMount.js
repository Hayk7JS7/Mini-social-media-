import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { readSpecificUserPost } from '../../../features/rootUserProfile/userPost/specificUserPost/api/readSpecificUserPost'

const useFetchUserPostsOnMount = ({ _id, myUserId }) => {
    const dispatch = useDispatch()
    useEffect(() => {
        if (_id && myUserId) {
            dispatch(readSpecificUserPost({_id, searchedUser: myUserId}))
        }
    }, [dispatch, _id])
}

export default useFetchUserPostsOnMount
