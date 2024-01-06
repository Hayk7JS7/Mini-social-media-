import React, { useEffect, useState } from "react"
import { ImageList, ImageListItem, Typography } from "@mui/material"
import { useDispatch, useSelector } from "react-redux"
import { selectLatestPhotosDetails } from "../../../../features/rootUserInfo/latestPhotosSlice/actions"
import { getLatestPhotos } from "../../../../features/rootUserInfo/latestPhotosSlice/api/getLatestPhotos"
import { selectUserProfileDetails } from "../../../../features/rootUserProfile/userProfile/actions"
import { useNavigate } from "react-router-dom"
import { useTokenExpired } from "../../../../hooks/useTokenExpired"

const LatestPhotos = () => {
  const navigate = useNavigate()
  const { photos } = useSelector(selectLatestPhotosDetails)
  const { _id } = useSelector(selectUserProfileDetails)
  const [images, setImages] = useState(photos)
  const dispatch = useDispatch()

  useTokenExpired()

  useEffect(() => {
    if(!_id)return
    dispatch(getLatestPhotos(_id))
  }, [_id, dispatch])

  useEffect(() => {
    if(photos.length > 0) {
      setImages(photos)
    }
  }, [photos])

  return (
    <div>
      <Typography variant="h6" fontWeight={100} mt={2} mb={2}>
        Latest Photos
      </Typography>
      <ImageList cols={3} rowHeight={100} gap={5}>
            {images.map((image, key) => {
              return (
                <React.Fragment key={key}>
                  <ImageListItem sx={{cursor: 'pointer'}}>
                    <img 
                      src={image.media_url}
                      alt="somthing"
                      onClick={() => navigate(`/profile/${image.authorId}`)}
                    />
                  </ImageListItem>                
                </React.Fragment>
              )
            })}      
      </ImageList>
    </div>
  )
}

export default LatestPhotos
