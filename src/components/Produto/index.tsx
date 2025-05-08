import { useState } from 'react'
import { Produto as ProdutoType } from '../../App'
import * as S from './styles'
import { useDispatch } from 'react-redux'
import { adcionarFavoritos } from '../../store/reduces/favoritar'
import { adcionar } from '../../store/reduces/carrinho'

type Props = {
  produto: ProdutoType
  estaNosFavoritos: boolean
}

export const paraReal = (valor: number) =>
  new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(
    valor
  )

const ProdutoComponent = ({ produto, estaNosFavoritos }: Props) => {
  const dispatch = useDispatch()
  const [favorito, setFavorito] = useState(estaNosFavoritos)

  const handleFavoritoClick = () => {
    dispatch(adcionarFavoritos(produto))
    setFavorito(!favorito) // Alterna o estado local
  }

  return (
    <S.Produto>
      <S.Capa>
        <img src={produto.imagem} alt={produto.nome} />
      </S.Capa>
      <S.Titulo>{produto.nome}</S.Titulo>
      <S.Prices>
        <strong>{paraReal(produto.preco)}</strong>
      </S.Prices>
      <S.BtnComprar onClick={handleFavoritoClick} type="button">
        {favorito ? '+ Adicionar aos Favoritos' : '- Remover dos favoritos'}
      </S.BtnComprar>
      <S.BtnComprar onClick={() => dispatch(adcionar(produto))} type="button">
        Adicionar ao carrinho
      </S.BtnComprar>
    </S.Produto>
  )
}

export default ProdutoComponent
