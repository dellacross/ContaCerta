import React, { useContext } from 'react'
import './styles.css'
import Aside from '../aside'
import Copyright from '../../components/Copyright'
import { Context } from '../../context/provider'

const Wrapper = ({title, children}) => {

  const {
    hideDatas,
    setHideDatas
  } = useContext(Context)

  return (
    <div id="wrapper">
      <Aside />
      <main>
        <header>
          <h2>{title}</h2>
          <section>
            <button onClick={() => setHideDatas(!hideDatas)}>
              {
                hideDatas ?
                (<ion-icon name="eye-off-outline"></ion-icon>)
                :
                (<ion-icon name="eye-outline"></ion-icon>)
              }
            </button>
            <p>
              Gasto Atual: {hideDatas ? `•••••` : "R$ 0.000,00"}
            </p>
          </section>
        </header>
        {children}
      </main>
    </div>
  )
}

export default Wrapper