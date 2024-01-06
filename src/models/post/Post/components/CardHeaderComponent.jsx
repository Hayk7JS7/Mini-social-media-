import { Avatar, CardHeader, IconButton } from "@mui/material"
import SkeletonLoader from "../models/SkeletonLoader"
import { MoreVert } from "@mui/icons-material"

const CardHeaderComponent = ({ author, avatar, handleAvatarClick, admin, formattedDate, handleOpen }) => {
    return (
      <CardHeader
        avatar={author ? (
          <Avatar
            sizes="small"
            sx={{ bgcolor: 'red' }}
            aria-label="recipe"
            src={avatar}
            onClick={handleAvatarClick}
            style={{ cursor: !admin ? 'pointer' : 'default' }}
          >
            {!avatar && author.substring(0, 1) + author.substring(author.length - 1, author.length)}
          </Avatar>
        ) : (
          <SkeletonLoader variant="circle" width={40} height={40} />
        )}
        action={
          <IconButton aria-label="settings" onClick={handleOpen}>
            {author ? <MoreVert /> : <SkeletonLoader variant="circle" width={40} height={40} />}
          </IconButton>
        }
        title={author || <SkeletonLoader width="60%" />}
        subheader={formattedDate || <SkeletonLoader width="40%" />}
      />
    )
  }
  
export default CardHeaderComponent
