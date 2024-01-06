import { Button, ButtonGroup } from "@mui/material"
import DateRange from "@mui/icons-material/DateRange"

const PostActions = ({ onPost, name = 'POST' }) => (
  <ButtonGroup fullWidth variant="contained" aria-label="outlined primary button group">
    <Button onClick={onPost}>{name}</Button>
    <Button sx={{width:"100px"}}>
      <DateRange/>
    </Button>
  </ButtonGroup>
)

export default PostActions
