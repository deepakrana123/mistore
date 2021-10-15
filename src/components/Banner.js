import React from 'react';
import Carousel from "react-bootstrap/Carousel";
import 'bootstrap/dist/css/bootstrap.min.css';

const Banner = ({banner}) => {
    return (
        <Carousel fade={false}>
        
        {banner.end.map((item,index)=>(
            <Carousel.Item id="banner"
            key={index}
            interval={1000}
            keyboard={true}>
            <img
            className="d-block w-100"
            src={item.image}
             key={item.image}
            alt="First slide"
          />
          <Carousel.Caption>
          <h3>{item.name}</h3>
          <p>{item.description}</p>
          <p>{item.soucre}</p>
          <p>Read More</p>
        </Carousel.Caption>
    
          </Carousel.Item>
 

        ))}
          
         
    
       
      </Carousel>
    )
}

export default Banner
