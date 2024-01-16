
import {useState} from "react";
import {removeFromArr} from "./dontionSlice";
import { useDispatch } from "react-redux";
import UpdateDontion from "./UpdateDontion";


const OneDontion = ({ one }) => {
    let [showUpdate,setUpdate]=useState(null)
    const dispatch=useDispatch();
    return (<div>
        <h1>{one.nameDoner}</h1>
        <h1>{one.sum}</h1>
        <h1>{one.dedication}</h1>
        <input type="button" onClick={()=>dispatch(removeFromArr(one.id))} value={"מחק אותי"}/>
        <input type="button" onClick={()=>{setUpdate(true)}} value={"עדכן אותי"}/>
        {showUpdate&&<UpdateDontion one={one}/>}
      
    </div>)
  
    }
    export default OneDontion;