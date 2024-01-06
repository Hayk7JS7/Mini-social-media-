import { CardMedia } from "@mui/material"

const CardMediaComponent = ({ imageUrl, setImageLoaded, handleImageClick, handleOpenBigScreenImg }) => {
    return (
      <CardMedia
        component="img"
        image={imageUrl}
        alt="loading..." //think about img sx's
        sx={{ maxWidth: '550px', maxHeight: '350px', cursor: 'pointer', objectFit: 'contain' }}
        onLoad={() => setImageLoaded(true)}
        onDoubleClick={handleOpenBigScreenImg}
        onClick={handleImageClick}
      />
    )
  }

export default CardMediaComponent
  