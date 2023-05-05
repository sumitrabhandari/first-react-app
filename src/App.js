import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import About from "./components/About";
import React, { useState } from "react";
import Alert from "./components/Alert";
import { BrowserRouter as Main, Route, Routes } from 'react-router-dom';

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  };

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "gray";
      showAlert(" Dark Mode has been enabled", "success");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert(" Light Mode has been enabled", "success");
    }
  };

  return (
     <>  
      <div className="container my-3">
        <Main>
        <Navbar title="Logo" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        {/* <Navbar/> */}
          <Routes>
          <Route exact path="/about" element={ <About mode={mode}/>}>
          </Route>
          <Route exact path="/" element={<TextForm showalert={showAlert} heading="Enter your message" mode={mode} />}>
          </Route>
          </Routes>
        </Main>
      </div>
    </>
  );
}

export default App;
