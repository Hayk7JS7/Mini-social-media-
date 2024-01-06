const BASE_URL = '/api/users/profile'

export const updateUser = (userId) => `${BASE_URL}/${userId}`
export const updateAvatar = (userId) => `${BASE_URL}/${userId}/avatar`
export const deleteUserAccountRoute = (userId) => `${BASE_URL}/delete/${userId}`
export const updateUserPrivac = (userId) => `${BASE_URL}/seitting/privacy/${userId}`