import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  posts: [],
}

export const postSlice = createSlice({
  name: "postSlice",
  initialState,
  reducers: {
    addPost: (state, action) => {
    //    console.log(action.payload)
        state.posts.push(action.payload)    
    },
    
  },
})

export const { addPost } = postSlice.actions
export default postSlice.reducer