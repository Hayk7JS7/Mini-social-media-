import { Avatar, Typography } from "@mui/material"

const AvatarDisplay = ({ avatar, avatarName }) => (
    <Avatar sx={{ width: 120, height: 120 }} alt="User Profile Picture" src={avatar}>
      <Typography variant="h3">{avatarName}</Typography>
    </Avatar>
  )

export default AvatarDisplay