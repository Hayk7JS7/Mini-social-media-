import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { readUserPost } from '../../../features/rootUserProfile/userPost/userPostReadSlice/api/readUserPost'
import { selectUserProfileDetails } from '../../../features/rootUserProfile/userProfile/actions'

const useFetchUserPostsOnMount = () => {
    const dispatch = useDispatch()
    const { _id } = useSelector(selectUserProfileDetails)
    useEffect(() => {
        if (_id) {
            dispatch(readUserPost(_id))
        }
    }, [_id])
}

export default useFetchUserPostsOnMount
