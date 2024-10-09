import React, { useContext} from 'react'
import './styles.css'
import { ExpenseFormContext } from '../../../components/Expenses/Form'

const Category = () => {

    const {
        setCategory,
        category,
        currentStep
    } = useContext(ExpenseFormContext)

    return (
        currentStep === 1 &&
        <section id="categories">
            <div className="category">
                <ion-icon name="fast-food-outline"></ion-icon>
                <p>Category</p>
            </div>
            <div className="category">
                <ion-icon name="fast-food-outline"></ion-icon>
                <p>Category</p>
            </div>
            <div className="category">
                <ion-icon name="fast-food-outline"></ion-icon>
                <p>Category</p>
            </div>
            <div className="category">
                <ion-icon name="fast-food-outline"></ion-icon>
                <p>Category</p>
            </div>
            <div className="category">
                <ion-icon name="fast-food-outline"></ion-icon>
                <p>Category</p>
            </div>
            <div className="category">
                <ion-icon name="fast-food-outline"></ion-icon>
                <p>Category</p>
            </div>
            <div className="category">
                <ion-icon name="fast-food-outline"></ion-icon>
                <p>Category</p>
            </div>
            <div className="category">
                <ion-icon name="fast-food-outline"></ion-icon>
                <p>Category</p>
            </div>
            <div className="category">
                <ion-icon name="fast-food-outline"></ion-icon>
                <p>Category</p>
            </div>
            <div className="category">
                <ion-icon name="fast-food-outline"></ion-icon>
                <p>Category</p>
            </div>
        </section>
    )
}

export default Category