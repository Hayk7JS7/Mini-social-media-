import { Box, Typography } from "@mui/material"

const UserInfo = ({ username, fullName }) => (
    <Box ml={2}>
      <Typography variant="h4" gutterBottom>
        {username}
      </Typography>
      <Typography variant="italic" gutterBottom>
        {fullName}
      </Typography>
    </Box>
)

export default UserInfo