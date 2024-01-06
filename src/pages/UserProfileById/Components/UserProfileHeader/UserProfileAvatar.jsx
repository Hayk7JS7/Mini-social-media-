import { Avatar, Typography } from "@mui/material"

const UserProfileAvatar = ({ user, handleAvatarDoubleClick }) => (
    <Avatar
      sx={{
        width: 120,
        height: 120,
        cursor: 'pointer',
      }}
      alt="User Profile Picture"
      src={user.avatar}
      onDoubleClick={handleAvatarDoubleClick}
    >
      <Typography variant="h3">{123}</Typography>
    </Avatar>
)

export default UserProfileAvatar
