import React from 'react'
import { Skeleton } from '@mui/material'

const SkeletonLoader = ({ variant = 'text', width, height }) => {
  return <Skeleton variant={variant} width={width} height={height} />
}

export default SkeletonLoader
