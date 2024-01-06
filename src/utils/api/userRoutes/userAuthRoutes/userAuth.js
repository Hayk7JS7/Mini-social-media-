const BASE_URL = '/api/users/auth'
export const USER_REGISTER_ROUTE = `${BASE_URL}/register`
export const USER_LOGIN_ROUTE = `${BASE_URL}/login`
export const USER_DELETE_ROUTE = (userId) => `${BASE_URL}/${userId}`
export const USER_REFRESH_ROUTE = `${BASE_URL}/refresh`
export const FIND_USER_BY_TOKEN = `${BASE_URL}/findByToken`