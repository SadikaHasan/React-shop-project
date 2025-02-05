import React, { useContext } from 'react'
import './Cart.css'
import { StoreContext } from '../../context/StoreContext'
import { useNavigate } from 'react-router-dom';

const Cart = () => {

  const{cartItems,food_list,removeFromCart,getTotalCartAmount} = useContext(StoreContext);

  const navigate = useNavigate();

  return (
    <div className='cart'>
      <div className="cart-items">
        <div className="cart-items-title">
          <p>Продукт</p>
          <p>Име</p>
          <p>Цена</p>
          <p>Брой</p>
          <p>Общо</p>
          <p>Премахване</p>
        </div>
        <br />
        <hr />
        {food_list.map((item,index)=>{
          if (cartItems[item._id]>0) 
          {
            return(
              <div>
                 <div className='cart-items-title cart-items-item'>
                <img src={item.image} alt="" />
                <p>{item.name}</p>
                <p>{item.price} лв</p>
                <p>{cartItems[item._id]}</p>
                <p>{item.price*cartItems[item._id]} лв</p>
                <p onClick={()=> removeFromCart(item._id)} className='cross'>x</p>
              </div>
              <hr />
              </div>
            )
          }
        })}
      </div>
      <div className="cart-bottom">
        <div className="cart-total">
          <h2>Общо</h2>
          <div>
            <div className="cart-total-details">
              <p>Обща сума</p>
              <p>{getTotalCartAmount()} лв</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <p>Цена за доставка</p>
              <p>{getTotalCartAmount()===0?0:4} лв</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <b>Общо</b>
              <b>{getTotalCartAmount()===0?0:getTotalCartAmount()+4} лв</b>
            </div>
          </div>
          <button onClick={() =>navigate('/placeorder')}>ПРЕМИНЕТЕ КЪМ ПЛАЩАНЕ</button>
        </div>
        <div className="cart-promocode">
          <div>
            <p>Въведете кода си за отстъпка</p>
            <div className='cart-promocode-input'>
              <input type="text" placeholder='promocode' />
              <button>ПОТВЪРДИ</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cart
