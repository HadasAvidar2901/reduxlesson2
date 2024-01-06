import { useDispatch } from "react-redux";
import { deleteDontion, selectDontionForEdit, selectDontionToSee } from "./store/actions/dontion";

const ListItem = ({ one }) => {
    //useSelector מיועד לשליפת נתונים מהסטייט הכללי

    let dispatch = useDispatch()//מיועד לשליחת פעולה שקרתה באתר לרידוסר


    return (<div>
        <h3>{one.nameDoner}</h3>
        <input type="button" onClick={() => { dispatch(deleteDontion(one.id)) }} value="מחק אותי" />
        <input type="button" onClick={() => { dispatch(selectDontionForEdit(one)) }} value="ערוך" />
        <input type="button" onClick={() => {dispatch(selectDontionToSee(one))}} value="הצג פרטים" />
        {/* <input type="button" onClick={() => { dispatch({ type: "SELECT_SONG_TO_PLAY", payload: one }) }} value="הצג פרטים" /> */}
    </div>);
}

export default ListItem;