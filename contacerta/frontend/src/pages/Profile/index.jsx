import React, { useState, useEffect } from 'react'
import './styles.css'
import Wrapper from '../../parts/Wrapper'
import axios from 'axios'

const Profile = () => {

  const [profile, setProfile] = useState(null)

  const getProfile = async () => {

    const token = localStorage.getItem('token')

    return await 
    axios
    .get('http://localhost:3333/profile', 
      {
        headers: {
          Authorization: `Bearer ${token}`
        }
      }
    )
  }

  useEffect(() => {
    getProfile().then(response => {
      setProfile(response.data)
      console.log(response.data)
    })
  }, [])

  return (
    <Wrapper title={"Perfil"}>
      <div id="profile-container">
        <div id="datas-container">
          <div id="user-photo">
            <ion-icon name="person-outline"></ion-icon>
          </div>
          <div id="user-datas">
            <h2>
              <span>{profile?.name}</span>
              <button><ion-icon name="create-outline"></ion-icon></button>
            </h2>
            <span>
              <p>Email</p>
              <p>{profile?.email}</p>
            </span>
            <span>
              <p>Renda Fixa Mensal</p>
              <p>{`R$ ${profile?.rent}`}</p>
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