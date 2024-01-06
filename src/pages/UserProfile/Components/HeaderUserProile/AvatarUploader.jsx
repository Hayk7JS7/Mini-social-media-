import { Box, IconButton } from "@mui/material"
import AddIcon from '@mui/icons-material/Add'
import { avatarStyle } from "../../styles/avatarUploader"

const AvatarUploader = ({ handleImageChange }) => (
    <Box sx={avatarStyle}>
      <input accept="image/*" type="file" onChange={handleImageChange} style={{ display: 'none' }} id="icon-button-file" />
      <label htmlFor="icon-button-file">
        <IconButton color="primary" size="large" component="span">
          <AddIcon />
        </IconButton>
      </label>
    </Box>
)

export default AvatarUploader
