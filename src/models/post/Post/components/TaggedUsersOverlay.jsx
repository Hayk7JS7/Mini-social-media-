import UserProfileLink from "../models/UserProfileLink"

const TaggedUsersOverlay = ({ taggedUsers, navigate }) => {
    return (
      <div className="tagged-users-overlay">
        {taggedUsers.map((user, index) => (
          <div key={index} className="tagged-user" style={{ cursor: 'pointer' }} onClick={() => navigate(`/profile/${user.userId}`)}>
            <UserProfileLink userId={user.userId} username={user.username} />
          </div>
        ))}
      </div>
    )
  }

export default TaggedUsersOverlay