import React from 'react'
import './styles.css'
import Header from '../header/index.jsx'
import Footer from '../footer/index.jsx'
import Aside from '../aside/index.jsx'

const Wrapper = ({children}) => {
  return (
    <div id="wrapper">
      <aside>
        <header>
          <ion-icon name="thumbs-up-outline"></ion-icon>
          <span>ContaCerta</span>
        </header>
        <main>
          <nav>
            <button>
              <ion-icon name="home"></ion-icon>
              <span>Home</span>
            </button>
            <button>
              <ion-icon name="calendar"></ion-icon>
              <span>Calendário</span>
            </button>
          </nav>
        </main>
      </aside>
      <main>
        {children}
      </main>
    </div>
  )
}

export default Wrapper