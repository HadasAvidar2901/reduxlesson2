import { useDispatch } from "react-redux"
import {useForm} from "react-hook-form";
import {updateArr} from "./dontionSlice"




const UpdateDontion=({one})=>{
    const dispatch=useDispatch();
    const {register,handleSubmit}=useForm({defaultValues:one})

    function save(data){
    
        dispatch(updateArr({data}))
    }

    return (<form onSubmit={handleSubmit(save)}>
        <h1>עדכן אותי</h1>
        <label>שם התורם</label>
        <input {...register("nameDoner")}/>
        <label>סכום התרומה</label>
        <input {...register("sum")}/>
        <label>הקדשה</label>
        <input {...register("dedication")}/>
        <input type="submit"/>

        

    </form>)

}
export default UpdateDontion;