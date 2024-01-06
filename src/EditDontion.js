import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { saveEditedDontion } from "./store/actions/dontion";

const EditDontion = () => {
    let dontionForEdit = useSelector(state => state.selectedDontionForEdit);
    let disp = useDispatch();
    let { register, handleSubmit, formState: { errors } } = useForm({
        defaultValues: dontionForEdit
    })

    const saveDetails = (data) => {
        console.log(data);
        disp(saveEditedDontion(data))

    }
    return (<form onSubmit={handleSubmit(saveDetails)}>

        <label> שם תורם</label>
        <input {...register("nameDoner", { minLength: 3 })} />
        {errors.nameDoner && <span>שם לא תקין</span>}


        <label>סכום</label>
        <input {...register("sum")} />

        <label>הקדשה</label>
        <input {...register("dedication")} />

        <input type="submit" />

    </form>);
}

export default EditDontion;