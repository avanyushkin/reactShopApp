import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchFavorites = createAsyncThunk(
  'products/fetchFavorites',
  async (params, thunkAPI) => {
    const response = await fetch('http://localhost:5000/favorites');
        const result = await response.json();
        return result;
  },
)

const initialState = {
  //favoritesLoading: false,
  //favoriteError: '',
  favorites: [],
}

export const favoritesSlice = createSlice({
  name: "favoritesSlice",
  initialState,
  reducers: {
     addPost: (state, action) => {
      //  state.posts.push(action.payload)    
    },
  },
  extraReducers: (builder) => {
    //builder.addCase(fetchFavorites.pending, (state, action) => {
    //  state.favoritesLoading = true;
      // console.log('process...');
    //})
    builder.addCase(fetchFavorites.fulfilled, (state, action) => {
    //  state.favoritesLoading = false;

      const dataFromServer = action.payload;
      state.favorites = dataFromServer;
    })
    //builder.addCase(fetchFavorites.rejected, (state, action) => {
      // console.log('error');
    //  state.favoriteError = "erorr";
    //})
    
  },
})

export default favoritesSlice.reducer