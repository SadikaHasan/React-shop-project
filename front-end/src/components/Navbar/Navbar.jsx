import React, { useContext, useState } from 'react';
import './Navbar.css';
import { assets } from '../../assets/assets';
import { Link } from 'react-router-dom';
import { StoreContext } from '../../context/StoreContext';

const Navbar = ({ setShowLogin }) => {
  const [menu, setMenu] = useState("home");
  const { getTotalCartAmount } = useContext(StoreContext);
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Управление на състоянието на влизане

  // Функция за отваряне на popup за вход
  const handleLogin = () => {
    setShowLogin(true); // Отваря popup-а за вход
    setIsLoggedIn(true); // Променя състоянието на влизане
  };

  // Функция за излизане от профила
  const handleLogout = () => {
    setIsLoggedIn(false); // Нулира състоянието на влизане
    alert("You have been logged out successfully!"); // Уведомление за излизане
  };

  return (
    <div className='navbar'>
      <Link to='/'><img src={assets.logo} alt="" className="logo" /></Link>
      <ul className="navbar-menu">
        <Link to='/' onClick={() => setMenu("home")} className={menu === "home" ? "active" : ""}>home</Link>
        <a href='#explore-menu' onClick={() => setMenu("menu")} className={menu === "menu" ? "active" : ""}>menu</a>
        <a href='#app-download' onClick={() => setMenu("mobile-app")} className={menu === "mobile-app" ? "active" : ""}>mobile-app</a>
        <a href='#footer' onClick={() => setMenu("contact-us")} className={menu === "contact-us" ? "active" : ""}>contact-us</a>
      </ul>
      <div className="navbar-right">
        <img src={assets.icons_search} alt="" />
        <div className="navbar-search-icon">
          <Link to='/cart'><img src={assets.shopping_bascket} alt="" /></Link>
          <div className={getTotalCartAmount() === 0 ? "" : "dot"}></div>
        </div>
        <button onClick={handleLogin} disabled={isLoggedIn}>LOGIN</button>
        <button onClick={handleLogout} disabled={!isLoggedIn}>LOGOUT</button>
      </div>
    </div>
  );
};

export default Navbar;


