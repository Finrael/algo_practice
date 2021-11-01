import React, { useState } from 'react';
import './gallery.css';
import axios from 'axios';
import soda from '../images/soda.jpg'
import beer from '../images/beer.jpg'
import coffee from '../images/coffee.jpg'
import tea from '../images/tea.jpg'

 const Gallery =({ imageNumber, ...props })=>{
    console.log('this is the url', imageNumber )
    const [picture, setPicture] = useState(props.imageNumber? '1':'0')
    
    const selectImage =(imageNumber)=>{
        switch(imageNumber){
            case '1':
                setPicture( soda);
                break;
            case '2':
                    setPicture( beer);
                    break;
            case '3':
                setPicture( coffee);
                break;
            case '4':
                setPicture( tea);
                break;
            default:
                setPicture(soda)
        }
        return (
            <>
        
{/* <img src={picture} /> */}
</>
        )
    }
  
    
    return(
    
        <div>
            {/* {selectImage(imageNumber)} */}
            {/* <img src={soda} /> */}
            <div className="grid-Container"> 
            <span class="grid-item"><img src={soda} /></span>
            <span class="grid-item"><img src={coffee} /></span>
             <span class="grid-item"><img src={beer} /></span>
             <span  class="grid-item"><img src={tea}/></span>
            </div>
        </div>
    )
}
export default Gallery;