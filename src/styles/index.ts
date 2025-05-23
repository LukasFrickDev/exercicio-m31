import { createGlobalStyle } from 'styled-components'
import styled from 'styled-components'

export const cores = {
  corTexto: '#121714',
  corFundo: '#eee',
  corPrincipal: '#0c2461',
  corSecundaria: '#4a69bd'
}

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    list-style: none;
    box-sizing: border-box;
    font-family: Roboto, sans-serif;
    color: ${cores.corTexto}
  }

  body {
    background-color: ${cores.corFundo};
    padding-bottom: 80px;
  }
`

export const Container = styled.div`
  max-width: 1024px;
  width: 100%;
  margin: 0 auto;

  @media (max-width: 1024px) {
    max-width: 80%;
  }
`
export default GlobalStyle
