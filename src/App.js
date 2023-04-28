import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import React, { useState } from 'react';



function App() {
const[mode, setMode]=useState('light')
 const toggleMode=()=>{
  if(mode === 'dark'){
    setMode('light');
    // document.body.style.backgroundColor='light';
  }
  else{
    setMode('dark');
    // document.body.style.backgroundColor='grey';
   }
 }

  return (
    <>
     <Navbar title="Logo" mode={mode} toggleMode={toggleMode}/>

     {/* <Navbar/> */}
    <div className="container my-3">
      <TextForm heading="Enter your message"/>
      </div>
     <About/>
     
    </>
   
  );
}

export default App;
