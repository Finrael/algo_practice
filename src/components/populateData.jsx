import { useState } from "react"

const PopulateData = (props)=>{
    const [dataIndex, setDataIndex] = useState(0)
    const [dataToShow1, setDataToShow1] = useState(props.data)
    const [randomNumArray, setRandomNumArray] = useState([])
    const [maxRandomNumbers, setMaxRandomNumbers] = useState(100)
    const dataIncreaseIndex  = ()=>{
        if (dataIndex<dataToShow1.length-1){
            setDataIndex(dataIndex+1);
        }
       
    }
    const datDecreaseIndex  = ()=>{
        if (dataIndex>0){
        setDataIndex(dataIndex-1);
        }
    }
    function getRandomInt(max) {
        return Math.floor(Math.random() * max);
      }

    const createRandomArray = ()=>{
        let randomArray=[];
        let randomNumber;
        for (let i = 0 ; i<maxRandomNumbers; i++){
            randomNumber =getRandomInt(i);
            randomArray.push(randomNumber)
        }
        console.log(randomArray)
        setRandomNumArray(randomArray)
    }

    const setMaxArrayNumber = (e)=>{
        setMaxRandomNumbers(e.target.value)
    }
    // setTimeout(() => {
    //     createRandomArray();
    // }, 10000);
    return(
        <>
        <div>
        <p>Games:{dataToShow1[dataIndex]}</p> <input value="+" onClick={dataIncreaseIndex} type="button"/><input value="-" onClick={datDecreaseIndex} type="button"/>
        </div>
        <p>Please select the size of the random array <input value={maxRandomNumbers} type="text" onChange={setMaxArrayNumber}/>   </p>
        <input type="button" value="generate random array" onClick={createRandomArray}/>
        <div>
        {randomNumArray.map((element, index)=>{
            return (
                <label>Element: {randomNumArray[index]}</label>
            )
        })}
        </div>
        </>
    )
}
export default PopulateData