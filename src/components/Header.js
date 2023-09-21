import React from 'react';
import Logo from "../assets/img/image 4.png";
import { NotificationAdd } from '@mui/icons-material';
import UserImage from "../assets/img/about-author.jpg";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./Header.css";


const Header = () => {
  return (
    <div className='header d-flex justify-content-between align-items-center pt-2 pb-2'>
        <div className='logo'>
            <img src={ Logo } alt='' />
        </div>
        <div className='right_menu'>
            <ul className='d-flex align-items-center justify-content-end' style={{ listStyle: 'none', margin: 0, padding: 0 }}>
                <li className='notification'>
                    <NotificationAdd className='notification_icon' />
                </li>
                <li>
                    <img className='user_image' src={ UserImage } alt='' />
                </li>
            </ul>
        </div>
    </div>
  )
}

export default Header