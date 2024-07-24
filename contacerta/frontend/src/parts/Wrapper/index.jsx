import React from 'react'
import './styles.css'
import Aside from '../aside'

const Wrapper = ({title, children}) => {
  return (
    <div id="wrapper">
      <Aside />
      <main>
        <header>
          <h2>{title}</h2>
          <span>
            <button>Cadastrar</button>
            <button>Entrar</button>
          </span>
        </header>
        {children}
      </main>
    </div>
  )
}

export default Wrapper