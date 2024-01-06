import { Skeleton } from '@mui/material'
import React from 'react'

const Skyleton = ({variant, width, height, open}) => {
  return (
    <>
        {open ? <Skeleton variant={variant} width={width} height={height}  /> : null}    
    </>
  )
}

export default Skyleton
