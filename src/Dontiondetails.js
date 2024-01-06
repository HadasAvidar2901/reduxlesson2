import { useSelector } from "react-redux";

const DontionDetails = () => {
    let dontion = useSelector(state => state.selectedDontion)
    return (<div className="">
        פרטי השיר הנבחר
        <h1>{dontion.nameDoner}</h1>
        <h2>{dontion.sum}</h2>
        <h2>{dontion.dedication}</h2>
    </div>);
}

export default DontionDetails;