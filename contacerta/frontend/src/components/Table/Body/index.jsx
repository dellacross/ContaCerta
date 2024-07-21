import React, { useContext} from 'react'
import './styles.css'
import { AuthContext } from '../../../context/provider'


const Body = () => {

  const { gastos } = useContext(AuthContext)

  return (
    <main id="table-body">
      { gastos?.length === 0 && <span>Você não adicionou nenhum gasto até o momento...</span> }
      {
        gastos?.length > 0 &&
        gastos && gastos?.map((item, index) => (
          <div 
            className="row"
            key={index}
          >
            <span>{item?.tipo}</span>
            <span>{item?.data}</span>
            <span className="descricao">{item?.descricao}</span>
            <span>{item?.valor}</span>
            <span>{item?.forma}</span>
            <span>{item?.pagante}</span>
          </div>
        ))
      }
    </main>
  )
}

export default Body