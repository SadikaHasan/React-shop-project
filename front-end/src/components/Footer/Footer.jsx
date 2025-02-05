import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'


const Footer = () => {

  return (
    <div className='footer' id='footer'>
      <div className="footer-content">
      <div className="footer-content-left">
        <img src={assets.logo} alt="" />
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati delectus maxime, qui voluptate explicabo cupiditate blanditiis laboriosam dolores dolor omnis! Non quos odio voluptatum officia pariatur. Repellat tempore saepe quae?
        Eius perspiciatis velit quis consectetur qui repudiandae. Debitis incidunt consequatur dolorem animi sed non, mollitia tempora alias maiores corporis assumenda earum sunt eius autem, dolor ipsam atque ipsum. Enim, explicabo.</p>
      <div className="footer-social-icons">
        <img src={assets.facebook_app_symbol} alt="" />
        <img src={assets.twitter} alt="" />
        <img src={assets.icons_linkedin} alt="" />
      </div>
      </div>
      <div className="footer-content-center">
            <table className="working-hours">
        <thead>
          <tr>
            <th colSpan="2" className='table'><h2>Работно време</h2></th>
          </tr>
        </thead>
        <tbody>
          <hr />
          <tr>
            <td>Понеделник</td>
            <td>10-24</td>
          </tr>
          <tr>
            <td>Вторник</td>
            <td>10-24</td>
          </tr>
          <tr>
            <td>Сряда</td>
            <td>10-24</td>
          </tr>
          <tr>
            <td>Четвъртък</td>
            <td>10-24</td>
          </tr>
          <tr>
            <td>Петък</td>
            <td>10-24</td>
          </tr>
          <tr>
            <td>Събота</td>
            <td>10-24</td>
          </tr>
          <tr>
            <td>Неделя</td>
            <td>10-24</td>
          </tr>
        </tbody>
      </table>
        </div>
        <div className="footer-content-right">
        <h2>КОНТАКТИ</h2>
        <ul>
            <li>0 700 20 789</li>
            <li>fooddel@gmail.com</li>
        </ul>
        </div>
      </div>
      <hr />
      <p className='footer-copyright'>Copyright 2025 FoodDelivery.bg</p>
    </div>
  )
}

export default Footer
