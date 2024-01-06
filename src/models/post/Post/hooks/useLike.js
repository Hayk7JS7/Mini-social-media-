import { useEffect, useState } from "react"
import { useDispatch } from "react-redux"
import { likeUserPostApi } from "../../../../features/rootUserProfile/userPost/userPostLikeSlice/api/likeUserPost"


const useLike = ({id, authorId}) => {
    const dispatch = useDispatch()
    const [like, setLike] = useState(false)

    useEffect(() => {
        if(like){
            const boundaryEffect = setTimeout(() => {
                const postInfo = {
                    postId: id,
                    authorId
                }
                dispatch(likeUserPostApi(postInfo))
            }, 2500)
            return (() => {
                clearTimeout(boundaryEffect)
            })    
        }
    }, [like])

    return {
        like, setLike
    }
}

export default useLike