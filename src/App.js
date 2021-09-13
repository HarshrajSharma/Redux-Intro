import React from "react";
import "./App.css";

import { useSelector, useDispatch} from 'react-redux';
import { decNumber, incNumber } from "./actions";

function App(){

  const myState=useSelector((state)=>state.changeNumber);
  const dispatch=useDispatch  ();
  return(
    <div className="container" >

      <h1>Increament/Decreament</h1>
      <h4>using React and Redux</h4>
      <input type="text" value={myState} />
      <div>
        <button onClick={()=>{dispatch(decNumber())}} >-</button>
        <button onClick={()=>{dispatch(incNumber())}} >+</button>
      </div>
    </div>
  );
}

export default App;