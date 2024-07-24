import React from 'react'
import './styles.css'
import Wrapper from '../../parts/Wrapper'

const Profile = () => {
  return (
    <Wrapper title={"Perfil"}>
      <div id="profile-container">
        <div id="datas-container">
          <div id="user-photo">
            <ion-icon name="person-outline"></ion-icon>
          </div>
          <div id="user-datas">
            <h2>
              <span>Full User Name</span>
              <button><ion-icon name="create-outline"></ion-icon></button>
            </h2>
            <span>
              <p>Email</p>
              <p>user@user.com</p>
            </span>
            <span>
              <p>Renda Fixa Mensal</p>
              <p>R$ 0.000,00</p>
            </span>
          </div>
        </div>
        <div id="accounts">
          <h2>
            <span>Contas</span>
            <button><ion-icon name="create-outline"></ion-icon></button>
          </h2>
        </div>
        <div id="members">
          <h2>
            <span>Membros</span>
            <button><ion-icon name="create-outline"></ion-icon></button>
          </h2>
          
        </div>
      </div>
    </Wrapper>
  )
}

export default Profile