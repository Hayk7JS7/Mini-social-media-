import { Box, Typography } from "@mui/material";

const UserInfo = ({ user }) => (
    <Box ml={2}>
      <Typography variant="h4" gutterBottom>
        {user.username}
      </Typography>
      <Typography variant="italic" gutterBottom>
        {`${user.firstName} ${user.lastName}`}
      </Typography>
    </Box>
  )

export default UserInfo