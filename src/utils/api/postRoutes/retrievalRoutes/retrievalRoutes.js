const BASE_URL = '/api/post/retrieval'

export const getAllPosts = id =>  `${BASE_URL}/${id}`

export const getPostById = postId => `${BASE_URL}/${postId}`

export const getUserAllPosts = userId => `${BASE_URL}/user/${userId}`

export const getSearchedUserAllPosts = (userId, searchedUser) => `${BASE_URL}/user/searchedPost/${userId}?search=${searchedUser}`