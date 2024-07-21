import React, { useState } from 'react'
import './styles.css'
import Gasto from '../../components/Gasto'
const Header = () => {

  const [open, setOpen] = useState(false)

  return (
    <header id="page-header">
      <span><ion-icon name="thumbs-up-outline"></ion-icon>ContaCerta</span>
      <button onClick={() => setOpen(true)}><ion-icon name="add-circle-outline"></ion-icon>Adicionar</button>
      { open && <Gasto setOpen={setOpen} /> }
    </header>
  )
}

export default Header