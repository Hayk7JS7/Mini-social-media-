import ImageIcon from '@mui/icons-material/Image'

const ImageUploader = ({ onImageChange }) => {
  const triggerFileInput = () => {
    document.getElementById('imageInput').click()
  }

  return (
    <>
      <ImageIcon color='secondary' onClick={triggerFileInput} style={{cursor: 'pointer'}}/>
      <input
        type="file"
        id="imageInput"
        hidden
        onChange={onImageChange}
        accept="image/*"
      />
    </>
  )
}

export default ImageUploader
