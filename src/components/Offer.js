import React from 'react';
import "../styles/Silder.css";
import Off from "./Off";

const Offer = ({end}) => {
    return (
        <div className="offerSection">
            {end.map((item,index)=>(
              <Off key={item.image} index={index} src={item.image} link={item.url}/>
            ))}
            
        </div>
    )
}

export default Offer
