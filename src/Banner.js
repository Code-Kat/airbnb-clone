import React, { useState } from 'react';
import './css/Banner.css';
import { Button } from "@material-ui/core";
import Search from './Search';
import { useHistory } from 'react-router-dom';
import MobileSearch from "./MobileSearch";

function Banner() {
    const history= useHistory();
    const  [showSearch, setShowSearch] = useState(false)

    return (
        <div className='banner'>
            <div className="banner__search">
                <div className="banner__bigSearch">{showSearch && <Search />}</div>
                <div className="banner__smallSearch">{showSearch && <MobileSearch />}</div>
                <Button 
                onClick={()=>setShowSearch(!showSearch)}
                className="banner__searchButton"
                variant="outlined">{showSearch? "Hide" : "Search Dates"}
                </Button>
            </div>
            <div className= "banner__infoContainer">
            <div className= "banner__info">
                
                <h1>Get out and stretch your imagination</h1>
                <h5>Plan a different kind of geteway to uncover the hidden gems near you.</h5>  
                
                <Button
                onClick={()=>history.push('/search')}
                variant="outlined">Explore Nearby
                </Button>
            </div>
            </div>
        </div>
    )
}

export default Banner
