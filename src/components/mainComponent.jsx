import { useState } from "react"
import BigOComp from "./bigOComp"
// import PopulateData from "./populateData"
// import GalleryComp from "./galleryComp"

const MainComponent =()=>{
    const [bigOState, setBigOState] =  useState('0')
     const onChangeBigO =(e)=>{
         setBigOState( e.target.value);
        console.log("this is the big O target ", bigOState)
     }
    return(
        <>
        <div>
            This is the main component
        </div>
        <div>
            <select name="bigOScaleToShow" onChange={onChangeBigO}>
                <option value="0">None</option>
                <option value="1">Constant</option>
                <option value="2">Logarithmic</option>
                <option value="3">Linear</option>
                <option value="4">Linearithmic</option>
                <option value="5">Cuadratic</option>
                <option value="6">Exponential</option>
                <option value="7">Factorial</option>
                </select>

        <BigOComp number={bigOState}/>
        </div>
        {/* <PopulateData data={['WarCraft', 'Warcraft 2' , 'Warcraft 3', 'Dragon Age: Origins', 'Dragon Age 2', 'Dragon Age: Inquisiton']}/> */}
        <GalleryComp/>
        </>
    )
}
export default MainComponent