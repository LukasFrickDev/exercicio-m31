import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Produto } from '../../App'

type CarrinhoState = {
  itens: Produto[]
}
const initialState: CarrinhoState = {
  itens: []
}

const carrinhoSlice = createSlice({
  name: 'carrinho',
  initialState,
  reducers: {
    adcionar: (state, action: PayloadAction<Produto>) => {
      const produto = action.payload
      const existe = state.itens.find((produtos) => produtos.id === produto.id)
      if (existe) {
        alert('Item já adicionado')
      } else {
        state.itens.push(produto)
      }
    }
  }
})

export const { adcionar } = carrinhoSlice.actions
export default carrinhoSlice.reducer
