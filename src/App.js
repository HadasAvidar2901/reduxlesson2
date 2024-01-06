import logo from './logo.svg';
import './App.css';
import DontionList from './DontionList';
import DontionDetails from './Dontiondetails';
import { useSelector } from 'react-redux';
import EditDontion from './EditDontion';

function App() {
  let selected = useSelector(state => state.selectedDontion)
  let selectedForEdit = useSelector(state => state.selectedDontionForEdit)

  return (<>
    <DontionList />
    {selected && <DontionDetails />}
    {selectedForEdit&&<EditDontion/>}
  </>
  );
}

export default App;
