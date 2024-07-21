import React, { useState, useEffect } from 'react'
import './styles.css'
import Wrapper from '../../parts/Wrapper'
import Table from '../../components/Table'
import Aside from '../../parts/aside'

const MainPage = () => {
  return (
    <Wrapper>
      <header>
        <button><ion-icon name="add-circle-outline"></ion-icon>Adicionar gasto</button>
        <button>Cadastrar</button>
        <button>Entrar</button>
      </header>
    </Wrapper>
  )
}

export default MainPage