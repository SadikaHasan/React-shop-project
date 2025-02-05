import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 
import './LogInPopup.css';
import { assets } from '../../assets/assets';
import axios from 'axios';

const LogInPopup = ({ setShowLogin, setIsLoggedIn }) => { // Добавен параметър setIsLoggedIn
  const [currState, setCurrState] = useState("Login");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState("");

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9]{8,}$/;

  const navigate = useNavigate();

  const handleValidation = () => {
    const newErrors = {};

    if (!emailRegex.test(email)) {
      newErrors.email = "Invalid email format.";
    }

    if (!passwordRegex.test(password)) {
      newErrors.password =
        "Password must be at least 8 characters long, include an uppercase letter, a lowercase letter, and a number.";
    }

    if (currState === "Sign Up" && name.trim() === "") {
      newErrors.name = "Name is required.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  
    if (handleValidation()) {
      if (currState === "Login") {
        // Логика за успешен вход
        alert("You have successfully logged in!"); // Уведомление за вход
        setIsLoggedIn(true); // Актуализиране на състоянието за вход
        setShowLogin(false); // Затваряне на popup-а
      } else {
        // Логика за регистрация
        axios.post('http://localhost:8081/signup', { email, password, name })
          .then(res => {
            if (res.data === "Success") {
              alert("Account created successfully!"); // Уведомление за регистрация
              setShowLogin(false); // Затваряне на popup-а
            } else {
              alert("Error creating account. Please try again.");
            }
          })
          .catch(err => console.log(err));
      }
    } else {
      setSuccessMessage("");
    }
  };

  return (
    <div className='login-popup'>
      <form className='login-popup-container' onSubmit={handleSubmit}>
        <div className="login-popup-title">
          <h2>{currState}</h2>
          <img onClick={() => setShowLogin(false)} src={assets.close} alt="close" />
        </div>
        <div className="login-popup-input">
          {currState === "Sign Up" && (
            <>
              <input
                type="text"
                placeholder='Name'
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
              {errors.name && <p className="error">{errors.name}</p>}
            </>
          )}
          <input
            type="email"
            placeholder='Email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          {errors.email && <p className="error">{errors.email}</p>}
          <input
            type="password"
            placeholder='Password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          {errors.password && <p className="error">{errors.password}</p>}
        </div>
        <button type="submit">{currState === "Sign Up" ? "Create account" : "Login"}</button>
        {successMessage && <p className="success-message">{successMessage}</p>}
        <div className="login-popup-condition">
          <input type="checkbox" required />
          <p>By continuing, I agree to the terms of use and privacy policy</p>
        </div>
        {currState === "Login" ? (
          <p>
            Create a new account? <span onClick={() => setCurrState("Sign Up")}>Click here!</span>
          </p>
        ) : (
          <p>
            Already have an account? <span onClick={() => setCurrState("Login")}>Login here!</span>
          </p>
        )}
      </form>
    </div>
  );
};

export default LogInPopup;

