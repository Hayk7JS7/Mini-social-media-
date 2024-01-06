const BASE_URL = '/api/users/users'

export const GET_ALL_USERS = `${BASE_URL}/`
export const GET_USER_BY_ID = (userId) => `${BASE_URL}/${userId}`
export const GET_RECENT_USER = `${BASE_URL}/recent`
export const GET_USER_LIST_BY_NAME = (name) => `${BASE_URL}/userName/${name}`