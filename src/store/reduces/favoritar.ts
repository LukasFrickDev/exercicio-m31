import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Produto } from '../../App'

type FavoritarState = {
  itens: Produto[]
}
const initialState: FavoritarState = {
  itens: []
}

const favoritarSlice = createSlice({
  name: 'favoritar',
  initialState,
  reducers: {
    adcionarFavoritos: (state, action: PayloadAction<Produto>) => {
      const produto = action.payload
      const existe = state.itens.find((produtos) => produtos.id === produto.id)
      if (existe) {
        const favoritosSemProduto = state.itens.filter(
          (produtos) => produtos.id !== produto.id
        )
        state.itens = favoritosSemProduto
      } else {
        state.itens.push(produto)
      }
    }
  }
})

export const { adcionarFavoritos } = favoritarSlice.actions
export default favoritarSlice.reducer
