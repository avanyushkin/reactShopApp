import { configureStore } from '@reduxjs/toolkit'
import favoritesReducer from './pages/favorite/favoritesSlice'
import productsReducer from './pages/main/productsSlice'
import cartReducer from './pages/cart/slices/index'
import productReducer from './pages/product/slices/index'

export const store = configureStore({
  reducer: { favorites: favoritesReducer,
             products: productsReducer,
             cart: cartReducer,
             product: productReducer, 
            },
})