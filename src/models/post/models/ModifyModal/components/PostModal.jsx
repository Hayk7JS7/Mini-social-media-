import { Box } from '@mui/material'
import { StyleModal } from '../ModalStyles'

const PostModal = ({ open, onClose, children }) => (
  <StyleModal open={open} onClose={onClose} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description">
      <Box width={400} height={280} bgcolor={"background.default"} color={"text.primary"} p={3} borderRadius={5}>
        {children}
      </Box>
  </StyleModal>

)

export default PostModal
