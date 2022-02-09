
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
// import About from './components/About';

import React, { useState } from 'react';

// import {
//   BrowserRouter as Router,
//   Switch,
//   Link
// } from "react-router-dom";

function App() {
  const toggleMode = ()=>{
    if(mode === 'light'){
      setmode("dark")
      document.body.style.backgroundColor='#212427';
      showAlert("Switch to dark mode","success")
    }
    else{
      setmode("light")
      document.body.style.backgroundColor='white';
      showAlert("Switch to light mode","success")
    }
  }
  const[mode,setmode]=useState("light");
  const [alert, setalert] = useState(null)

  const showAlert=(message,type)=>{
    setalert({
      msg:message,
      type:type
    })
    setTimeout(() => {
       setalert(null);
    }, 1500);
  }
  
  return (
   <>
   {/* <Router> */}
  <Navbar title = "TextUtils" mode ={mode} toggleMode={toggleMode}/>
  <Alert alert = {alert}/>
  <div className="container my-8">
    {/* <Switch>
          <Switch path="/about">
            <About />
          </Switch> */}
          {/* <Switch path="/"> */}
        <TextForm showAlert={showAlert} heading = "Below is textform Enter for Conversion" mode ={mode}/>
          {/* </Switch>
    </Switch> */}
  </div>
  {/* </Router> */}
   </>
  );
}

export default App;
