import { Tooltip, Fab } from '@mui/material'
import AddIcon from '@mui/icons-material/Add'

const AddButton = ({ onClick }) => (
  <Tooltip title="Add" sx={{position:"fixed",bottom:20,left:{xs:"calc(50%-25px)",md:30}}} onClick={onClick}>
    <Fab color="primary" aria-label="add">
      <AddIcon />
    </Fab>
  </Tooltip>
)

export default AddButton
