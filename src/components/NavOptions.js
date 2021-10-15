import React,{useState,useEffect} from 'react'
import NavCard from "./NavCard.js";
import "../styles/NavOptions.css";
import {useParams} from "react-router-dom";




const NavOptions = ( {miPhones,redmiPhones,tv,laptop,fitnessAndLifeStyle,home,audio,accessories}) => {
const {id}=useParams();
   const [miPhoneToggle, setMiPhoneToggle] = useState(false);
   const [redmiPhoneToggle,setRedmiPhoneToggle] = useState(false);
   const [tvToggle,setTvToggle] = useState(false);
   const [laptopToggle,setLaptopToggle] = useState(false);
   const [fitnessToggle,setFitnessToggle] = useState(false);
   const [homeToggle,setHomeToggle] = useState(false);
   const [audioToggle,setAudioToggle] = useState(false);
   const [accessoriesToggle,setAccessoriesToggle] = useState(false);
 
console.log(window.location.path);
console.log(id);
   useEffect(() => {
     
    if(window.location.href === "http://localhost:3000/#miphones"){
        return   setMiPhoneToggle(true)
       }
     if(window.location.href === "http://localhost:3000/#redmiphones"){
        return   setRedmiPhoneToggle(true)
       }
       if(window.location.href === "http://localhost:3000/#tv"){
        return   setTvToggle(true)
       }
       if(window.location.href === "http://localhost:3000/#laptops"){
        return   setLaptopToggle(true)
       }
       if(window.location.href === "http://localhost:3000/#lifestyle"){
        return  setFitnessToggle(true)
       }
       if(window.location.href === "http://localhost:3000/#home"){
        return  setHomeToggle(true)
       }
       if(window.location.href === "http://localhost:3000/#audio"){
        return  setAudioToggle(true)
       }
       
       if(window.location.href === "http://localhost:3000/#accessories"){
        return  setAccessoriesToggle(true)
       }

       
   }, [])

   console.log(miPhoneToggle)
    return (
        <div className="navOptions"> 

            {miPhoneToggle?   miPhones.map((item)=>(

                 <NavCard name={item.name} price={item.price} image={item.image} key={item.image} />
              )) : null }
            
      
            {redmiPhoneToggle?   redmiPhones.map((item)=>(

               <NavCard name={item.name} price={item.price} image={item.image} key={item.image} />
           )) : null }
     

            {tvToggle ?   tv.map((item)=>(

                <NavCard name={item.name} price={item.price} image={item.image} key={item.image} />
           )) : null }

           {laptopToggle ?   laptop.map((item)=>(

              <NavCard name={item.name} price={item.price} image={item.image} key={item.image} />
           )) : null }
     
   

            {fitnessToggle ?   fitnessAndLifeStyle.map((item)=>(

              <NavCard name={item.name} price={item.price} image={item.image} key={item.image} />
           )) : null }
     

               {homeToggle ?   home.map((item)=>(

                   <NavCard name={item.name} price={item.price} image={item.image} key={item.image} />
              )) : null }
     
     

            {audioToggle ?   audio.map((item)=>(

             <NavCard name={item.name} price={item.price} image={item.image} key={item.image} />
            )) : null }
     

            {accessoriesToggle ?   accessories.map((item)=>(

                <NavCard name={item.name} price={item.price} image={item.image} key={item.image} />
             )) : null }
     
        </div>
    )
}

export default NavOptions;