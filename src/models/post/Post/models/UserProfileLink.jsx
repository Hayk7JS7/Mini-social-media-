import React from 'react'
import { useNavigate } from 'react-router-dom'

const UserProfileLink = ({ userId, username }) => {
  const navigate = useNavigate()
  const handleClick = () => {
    navigate(`/profile/${userId}`)
  }

  return (
    <span onClick={handleClick} style={{ cursor: 'pointer' }}>
      {username}
    </span>
  )
}

export default UserProfileLink
