const bigOComp = (props)=>{
    const scales = props.number;
    const showScale = (scales)=>{

        let scaleValue =""
        switch(scales){
            case "0" :
                scaleValue="none"
                break;
                case "1" :
                    scaleValue=" O(1)"
                    break;
                case "2" :
                    scaleValue="O(log n)"
                    break;
                case "3" :
                    scaleValue="O(n)"
                    break;
                case "4" :
                    scaleValue=" O(n log n)"
                    break;
                case "5" :
                    scaleValue="O(n²)"
                    break;
                case "6" :
                    scaleValue="O(2^n)"
                    break;
                case "7" :
                    scaleValue="O(n!)"
                    break;
            default:
                scaleValue="none"
                break;
        }
        return(
            <div>
                {scaleValue}
            </div>
        )
    }
    return (
        <div>
            {showScale(scales)}
        </div>
    )
}
export default bigOComp