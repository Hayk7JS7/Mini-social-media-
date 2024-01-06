
export const avatarStyle = {
    position: 'absolute',
    top: 0,
    left: 0,
    width: 120,
    height: 120,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
    opacity: 0,
    transition: 'opacity 0.3s',
    borderRadius: '50%',
    '&:hover': {
        opacity: 1,
    },
}