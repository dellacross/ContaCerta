import React, { useState } from 'react'
import './styles.css'
import Wrapper from '../../parts/Wrapper'
import Table from '../../components/Expenses/Table'
import Form from '../../components/Expenses/Form'

const Expenses = () => {

    const [openForm, setOpenForm] = useState(false)

    return (
        <Wrapper title="Extrato">
            { !openForm && <Table setOpenForm={setOpenForm} /> }
            { openForm && <Form /> }
        </Wrapper>
    )
}

export default Expenses