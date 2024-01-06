import { createSlice } from "@reduxjs/toolkit"
import { createUserPost } from "../userPostCreateSlice/api/createUserPost"
import { deleteUserPost } from "../userPostDeleteSlice/api/deleteUserPost"
import { readUserPost } from "../userPostReadSlice/api/readUserPost"
import { updateUserPost } from '../userPostUpdateSlice/api/updateUserPost'

const initialState = {
    posts: []
}

const userPostsSlice = createSlice({
    name: 'userPosts',
    initialState,
    reducers: {
        setPosts: (state, action) => {
            state.posts = action.payload
        },
        addPosts: (state, action) => {

        },
        updatePost: (state, action) => {

        },
        deletePost: (state, action) => {

        }
    },
    extraReducers: (builder) => {
        builder
        .addCase(readUserPost.fulfilled, (state, action) => {
            state.posts = action.payload
        })
        .addCase(createUserPost.fulfilled, (state, action) => {
            state.posts.push(action.payload)
        })
        .addCase(deleteUserPost.fulfilled, (state, action) => {
            state.posts = state.posts.filter(post => post._id !== action.payload._id) 
        })
        .addCase(updateUserPost.fulfilled, (state, action) => {
            state.posts = state.posts.map(post => {
                if(post._id === action.payload._id) {
                    return {...post,...action.payload}
                }
                return post
            })
        })
    }
})

export const { setPosts, addPosts, updatePost, deletePost } = userPostsSlice.actions

export default userPostsSlice.reducer