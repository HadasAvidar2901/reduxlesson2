
import { useSelector } from "react-redux";
import OneDontion from './oneDontion'

const DontionList = () =>{

 let arr = useSelector(state => state.dontion.arr);
return (<ul>
    {arr.map(item=>{return<li key={item.id}><OneDontion one={item}/></li>})}
</ul>)



}
export default DontionList;