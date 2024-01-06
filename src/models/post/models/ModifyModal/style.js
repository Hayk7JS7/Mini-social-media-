import styled from "@emotion/styled"
import { Avatar } from "@mui/material"

export const UserContainer = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    marginBottom: theme.spacing(2),
    marginTop: theme.spacing(2),
  }))
  
export const AvatarStyled = styled(Avatar)(({ theme }) => ({
    marginRight: theme.spacing(2),
}))
  