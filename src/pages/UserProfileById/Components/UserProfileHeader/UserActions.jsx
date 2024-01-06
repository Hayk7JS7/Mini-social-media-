import { Box, IconButton, Typography } from "@mui/material"
import Diversity2Icon from '@mui/icons-material/Diversity2'
import PersonAddIcon from '@mui/icons-material/PersonAdd'
import PersonRemoveIcon from '@mui/icons-material/PersonRemove'

const UserActions = ({ userFriends, add, setAdd }) => (
    <Box sx={{ marginLeft: '250px' }}>
      <Typography variant="h2">
        {userFriends ? (
          <IconButton style={{ fontSize: '48px' }} aria-label="Friend" color="primary">
            <Diversity2Icon style={{ fontSize: 'inherit' }} />
          </IconButton>
        ) : (
          <IconButton
            style={{ fontSize: '48px' }}
            aria-label="Friend"
            color="primary"
            onClick={() => setAdd(!add)}
          >
            {add ? (
              <PersonRemoveIcon style={{ fontSize: 'inherit' }} />
            ) : (
              <PersonAddIcon style={{ fontSize: 'inherit' }} />
            )}
          </IconButton>
        )}
      </Typography>
    </Box>
)

export default UserActions
