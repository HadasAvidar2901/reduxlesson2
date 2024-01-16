import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { addToArr } from "./dontionSlice";
const AddDontion = () =>{
let dispatch = useDispatch();
 let { register, handleSubmit } = useForm();
 const save = (data) => 
 { dispatch(addToArr(data))
 }
  return (<form onSubmit={handleSubmit(save)}>
             <label>שם התורם</label>
             <input {...register("nameDoner")}/>
             <label>סכום התרומה</label>
             <input {...register("sum")}/>
             <label>הקדשה</label>
             <input {...register("dedication")}/>
             <input type="submit"/>
  </form>)

}
export default AddDontion;