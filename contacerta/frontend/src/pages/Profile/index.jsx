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
          </h2>
          <main>
            {
              profile?.bankAccounts?.length > 0 &&
              profile?.bankAccounts && profile.bankAccounts.map(item => (
                <span>a</span>
              ))
            }
            {
              profile?.bankAccounts?.length === 0 && profile?.bankAccounts &&
              <p>Nenhuma conta bancária cadastrada...</p>
            }
          </main>
        </div>
        <div id="members">
          <h2>
            <span>Grupos</span>
          </h2>
          <main>
            {
              profile?.groups?.length > 0 &&
              profile?.groups && profile.groups.map((item, index) => (
                <span key={item?.id}><b>{`${index+1}.`}&nbsp;</b>{item?.name}</span>
              ))
            }
            {
              profile?.groups?.length === 0 && profile?.groups &&
              <p>Nenhuma conta bancária cadastrada...</p>
            }
          </main>
        </div>
        <div id="charts">
          <h2>Gráficos</h2>
        </div>
        <div id="goals">
          <h2>Objetivos</h2>
        </div>
      </div>
    </Wrapper>
  )
}

export default Profile