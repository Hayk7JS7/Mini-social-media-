import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { selectUserProfileDetails } from "../../../features/rootUserProfile/userProfile/actions"
import { updateUserPrivacy } from "../../../features/rootUserProfile/userSettings/api/updateUserPrivacy"

const useAccountPrivacy = () => {
    const dispatch = useDispatch()
    const { publicStatus, _id } = useSelector(selectUserProfileDetails)
    const [isPublicAccount, setisPublicAccount] = useState(publicStatus)

    useEffect(() => {
        const BoundaryEffect = setTimeout(() => {
            if(publicStatus === isPublicAccount) return 
            const userInfo = {
                _id,
                publicStatus: isPublicAccount
            }
            dispatch(updateUserPrivacy(userInfo))
        }, 5000)
        return (() => clearTimeout(BoundaryEffect))
    }, [isPublicAccount])

    return {
        isPublicAccount, 
        setisPublicAccount
    }
}

export default useAccountPrivacy