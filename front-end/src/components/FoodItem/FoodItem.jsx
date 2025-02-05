import React, { useContext } from 'react'
import './FoodItem.css'
import { assets } from '../../assets/assets'
import { StoreContext } from '../../context/StoreContext'

const FoodItem = ({id,name,price,description,image}) => {

    const {cartItems,addToCart,removeFromCart} = useContext(StoreContext)

  return (
    //функционалност за добавяне и премахване на продукти при кликане върху символа
    <div className='food-item'>
        <div className="food-item-img-container">
            <img className='food-item-image' src={image} alt="" />
            {!cartItems[id]
                ?<img className='add' onClick={()=> addToCart(id)} src={assets.add_icon} alt="" />
                :<div className='food-item-counter'>
                    <img onClick={()=> removeFromCart(id)} src={assets.icon_minus} alt="" />
                    <p>{cartItems[id]}</p>
                    <img onClick={()=> addToCart(id)} src={assets.add_icon} alt="" />
                </div>
            }
        </div>
      <div className="food-item-info">
        <div className="food-item-name-ratting">
            <p>{name}</p>
            <img src={assets.rating} alt="" />
        </div>
        <p className="food-item-description">{description}</p>
        <p className="food-item-price">{price} лв</p>
      </div>
    </div>
  )
}

export default FoodItem
