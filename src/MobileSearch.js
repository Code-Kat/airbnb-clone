import "./css/MobileSearch.css";
import React from 'react';
import { Button } from "@material-ui/core";
import { useHistory } from "react-router-dom";

function MobileSearch() {

    const history=useHistory();
    return (
        <div className="mobileSearch">

           <div className="mobileSearch__info">
               <h1>Find stays on Airbnb</h1>
               <p>Discover private roooms or entire homes parfectly adapted for all types of travel. </p>
           </div>
           <div className="mobileSearch__city">
               <input type="text" placeholder="Where are you going?" />
           </div>

           <div className="mobileSearch__dates">
                <div className="mobileSearch__date">
                    <p>START</p>
                    <input type="date" />
                </div>
                <div className="mobileSearch__date">
                    <p>END</p>
                    <input type="date" />
               </div>
           </div>

           <div className="mobileSearch__travellers">
                <div className="mobileSearch__traveller">
                    <p >ADULTS</p>
                    <input type="number" placeholder={2} />
                </div>
               <div className="mobileSearch__traveller">
                   <p>CHILDREN</p>
                   <input type="number" placeholder={0} />
                </div>

           </div>
           <Button
           className="mobileSearch__button"
           onClick={()=>history.push('/search')}
           variant="outlined">
              Search
           </Button> 
        </div>
    )
}

export default MobileSearch
