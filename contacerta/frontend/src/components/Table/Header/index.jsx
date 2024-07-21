import React from 'react'
import './styles.css'

const Header = () => {
  return (
    <header id="table-header">
      <span>TIPO</span>
      <span>DATA</span>
      <span className="descricao">DESCRIÇÃO</span>
      <span>VALOR</span>
      <span>FORMA</span>
      <span>PAGANTE</span>
      <span>EXCLUIR</span>
    </header>
  )
}

export default Header