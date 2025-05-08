import { configureStore } from '@reduxjs/toolkit'
import carrinhoReducer from './reduces/carrinho'
import favoritarReducer from './reduces/favoritar'
import api from '../services/api'

export const store = configureStore({
  reducer: {
    carrinho: carrinhoReducer,
    favoritar: favoritarReducer,
    [api.reducerPath]: api.reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware)
})

export type RootReducer = ReturnType<typeof store.getState>
export default store
