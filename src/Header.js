import React from 'react';
import "./css/Header.css";
import SearchIcon from '@material-ui/icons/Search';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import LanguageIcon from '@material-ui/icons/Language';
import { Avatar } from '@material-ui/core';
import { Link } from "react-router-dom";

function Header() {
    return (
        <div className='header'>
            <Link to="/">
                <img 
                className='header__icon'
                src="https://i.pinimg.com/originals/3c/bf/be/3cbfbe148597341fa56f2f87ade90956.png"
                alt="logo" 
            />
            </Link>

            <div className="header__center"> 
                <input type="text"/>
                <SearchIcon className="header__searchIcon"/>
            </div>

            <div className="header__right">
                <p>Become a host</p>
                    <LanguageIcon className="headerRight__languageIcon"/>
                    <ExpandMoreIcon className="headerRight__expandMoreIcon"/>
                    <Avatar />
                
            </div>
        </div>
    )
}

export default Header
