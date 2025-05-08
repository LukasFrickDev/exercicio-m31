import { Provider } from 'react-redux'
import Header from './components/Header'

import store from './store'

import GlobalStyle, { Container } from './styles'
import ProdutosComponent from './containers/Produtos'

export type Produto = {
  id: number
  nome: string
  preco: number
  imagem: string
}

function App() {
  return (
    <Provider store={store}>
      <GlobalStyle />
      <Container>
        <Header />
        <ProdutosComponent />
      </Container>
    </Provider>
  )
}

export default App
