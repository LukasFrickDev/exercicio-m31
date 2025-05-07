import { configureStore } from '@reduxjs/toolkit'
import carrinhoReducer from './reduces/carrinho'
import favoritarReducer from './reduces/favoritar'

export const store = configureStore({
  reducer: {
    carrinho: carrinhoReducer,
    favoritar: favoritarReducer
  }
})

export type RootReducer = ReturnType<typeof store.getState>
