import React, { useState, useContext } from 'react'
import './styles.css'

const Gasto = (props) => {

    return (
        <div className="expense">
            <span>Categoria</span>
            <span>Data</span>
            <span className='description'>Descrição</span>
            <span>Valor</span>
            <span>Método</span>
            <span>Grupo</span>
            <span>Membro</span>
            <span>Conta</span>
            <span className='edit'><ion-icon name="ellipsis-horizontal"></ion-icon></span>
        </div>
  )
}

export default Gasto