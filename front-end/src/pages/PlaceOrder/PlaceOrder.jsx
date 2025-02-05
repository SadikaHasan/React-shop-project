import React, { useContext, useState } from 'react';
import './PlaceOrder.css';
import { StoreContext } from '../../context/StoreContext';

const PlaceOrder = () => {
  const { getTotalCartAmount } = useContext(StoreContext);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    address: '',
    city: '',
    region: '',
    phone: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (Object.values(formData).some((value) => value.trim() === '')) {
      alert('Моля, попълнете всички полета.');
      return;
    }

    alert(
      `Успешно направихте поръчка! Общата стойност на поръчката е ${
        getTotalCartAmount() === 0
          ? '0 лв'
          : `${getTotalCartAmount() + 4} лв`
      }.`
    );
  };

  return (
    <form className="place-order" onSubmit={handleSubmit}>
      <div className="place-order-left">
        <p className="title">Информация за доставката</p>
        <div className="multi-fields">
          <input
            type="text"
            name="firstName"
            placeholder="Име"
            value={formData.firstName}
            onChange={handleInputChange}
            required
          />
          <input
            type="text"
            name="lastName"
            placeholder="Фамилия"
            value={formData.lastName}
            onChange={handleInputChange}
            required
          />
        </div>
        <input
          type="email"
          name="email"
          placeholder="Имейл"
          value={formData.email}
          onChange={handleInputChange}
          required
        />
        <input
          type="text"
          name="address"
          placeholder="Адрес"
          value={formData.address}
          onChange={handleInputChange}
          required
        />
        <div className="multi-fields">
          <input
            type="text"
            name="city"
            placeholder="Град"
            value={formData.city}
            onChange={handleInputChange}
            required
          />
          <input
            type="text"
            name="region"
            placeholder="Област"
            value={formData.region}
            onChange={handleInputChange}
            required
          />
        </div>
        <input
          type="text"
          name="phone"
          placeholder="Телефон"
          value={formData.phone}
          onChange={handleInputChange}
          required
        />
      </div>
      <div className="place-order-right">
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
              <p>{getTotalCartAmount() === 0 ? 0 : 4} лв</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <b>Общо</b>
              <b>
                {getTotalCartAmount() === 0 ? 0 : getTotalCartAmount() + 4} лв
              </b>
            </div>
          </div>
          <button type="submit">ПЛАЩАНЕ</button>
        </div>
      </div>
    </form>
  );
};

export default PlaceOrder;

