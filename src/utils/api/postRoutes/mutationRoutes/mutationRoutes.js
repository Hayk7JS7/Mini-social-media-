const BASE_URL = '/api/post/mutation'

export const CREATE_POST = `${BASE_URL}/createPost`

export const updatePost = postId => `${BASE_URL}/update/${postId}`

export const deletePost = postId => `${BASE_URL}/delete/${postId}`

export const likeUserPost = postId => `${BASE_URL}/like/${postId}`