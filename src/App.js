import './App.css';
import Passgen from './Pass Gen/Passgen';
import Emailgen from './Email Gen/Emailgen';
import { useState } from 'react';

function App() {
  const [gen,setGen]= useState(false);
  const toggleHandle=()=>{
    if (document.getElementById('tog').style.left==="-9%"){
      //pass
      setGen(!gen);
      document.getElementById('tog').style.left="-20%";
      document.getElementById('tb').style.background="rgba(0, 102, 102, 0.267)";
  }
  else{
      //email
      setGen(!gen);
      document.getElementById('tog').style.left="-9%";
      document.getElementById('tb').style.background="gold";
  }
  }
  return (
    <div className="App">
      <div className="toggle">
        <p>Password Generator</p>
        <label className="t_back" onClick={toggleHandle} id="tb"></label>
        <label className="tgl" id="tog"></label>
        <p>Email Generator</p>
      </div>
      {gen===false? <Passgen/> : <Emailgen/>}
      
    </div>
  );
}

export default App;
