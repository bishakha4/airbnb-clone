import React from 'react';
import './Header.css';
import SearchIcon from '@mui/icons-material/Search';
import LanguageIcon from '@mui/icons-material/Language';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Avatar } from "@material-ui/core";
import { Link } from 'react-router-dom';


function Header() {
    return (
        <div className='header'>
            <Link to='/'>
                <img 
                    className='header__icon'
                    src="https://risingcandle.com/wp-content/uploads/2021/11/613fad5962ccddacd7cedb0c_600x400_Airbnb_Logo.f891e0066454456292ad7009aad136ea679f2cfd-1.png"
                    alt="" 
                />
            </Link>
            
            
            <div className='header__center'>
                <input type="text" />
                <SearchIcon />
            </div>

            <div className='header__right'>
                <p>Become a host</p>
                <LanguageIcon />
                <ExpandMoreIcon />
                <Avatar />
            </div>
        </div>
    )
}

export default Header
