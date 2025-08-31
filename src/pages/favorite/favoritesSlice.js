import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchFavorites = createAsyncThunk(
  'products/fetchFavorites',
  async (params, thunkAPI) => {
    const response = await fetch('http://localhost:5000/favorites');
        const result = await response.json();
        return result;
  },
)

export const addToFavorites = createAsyncThunk(
  'products/addToFavorites',
  async (product, { dispatch }) => {
    await fetch('http://localhost:5000/favorites', {
      method: "POST",
      body: JSON.stringify(product),
      headers: {
        "Content-Type": "application/json",
      },
    })// .then(() => dispatch(fetchFavorites()))
    
    dispatch(fetchFavorites());
    // return result;
  },
)

export const deleteFavorites = createAsyncThunk(
  'products/deleteFavorites',
  async (id, { dispatch }) => {
    //fetch(`http://localhost:5000/favorites/${product.id}`, {
    //  method: "DELETE",
    //})// .then(() => dispatch(fetchFavorites()))
        //return result;
      await fetch(`http://localhost:5000/favorites/${id}`, {
        method: 'DELETE',
      })
      dispatch(fetchFavorites());
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

      state.favorites = action.payload;
    })
    //builder.addCase(fetchFavorites.rejected, (state, action) => {
      // console.log('error');
    //  state.favoriteError = "erorr";
    //})
    
  },
})

export default favoritesSlice.reducer