// import logo from './logo.svg';
import "./App.css";
import Dark from "./components/Dark";
import Navbar from "./components/Navbar";
import TextForms from "./components/TextForms";
import React, { useState } from 'react'
import Alert from "./components/Alert";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";





function App() {
  const [mode, setmode] = useState("light")
  const [alert, setalert] = useState(null)

  const showalert = (messege)=>{
    setalert({
      msg:messege
      
    })
    setTimeout(() => {
      setalert(null)
    }, 2000);
  }

  const toggleMode =()=>{
    if(mode == "light"){
      setmode("dark")
      document.body.style.backgroundColor = "rgb(5 26 53)"
      showalert("Dark mode has been enabled")
      document.title= "TextUtils-Dark mode"
      setInterval(() => {
        document.title= "Your Device has wires"
      }, 1000);

      setInterval(() => {
        document.title= "Download  ThextUtils"        
      }, 2000);
    }
    else{
      setmode("light")
      document.body.style.backgroundColor = "#c4c3c3"
      showalert("Light mode has been enabeld")
      document.title= "TextUtils-Light mode"
    }
  }

  return (
    <>
      <Router>
      <Navbar title="TextUtils" aboutText = "About" custom ={mode} toggle ={toggleMode}/>
      <Alert alert={alert}/>
      <div className="container my-3">
      <Switch>
          <Route path="/about">
            <Dark />
          </Route>
          <Route path="/">
            <TextForms heading = "Enter your text to analyze" custom ={mode} />
          </Route>
        </Switch>
      </div>
      </Router>  
    </>
  );
}

export default App;
   