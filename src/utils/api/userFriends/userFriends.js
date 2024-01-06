const BASE_URL_ACTIONS = '/api/friends/actions'
const BASE_URL_QUERIES = '/api/friends/queries'

export const getUserAllFriends = userId => `${BASE_URL_QUERIES}/${userId}`

export const getSpecificUserAllFriends = (userId, searchedUserId) => `${BASE_URL_QUERIES}/friendsList/${userId}?search=${searchedUserId}`

export const requestFriends = userId => `${BASE_URL_ACTIONS}/request/${userId}`

export const acceptFriends = userId => `${BASE_URL_ACTIONS}/accept/${userId}`

export const removeFriends = userId => `${BASE_URL_ACTIONS}/remove/friends/${userId}`

export const removeRequestedFriends = userId => `${BASE_URL_QUERIES}/remove/requestedFriends/${userId}`
