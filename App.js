import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
//  import About from './components/About';
// import Test from './components/Test'
import Alert from './components/Alert';
import React, {useState} from 'react';
// import {
//   BrowserRouter ,
//   RouterProvider,
//   Routes,
//   Route,
//   Link
// } from "react-router-dom";
function App() {
  
 
  const [alert, setAlert] = useState(null)
  const showAlert = (message , type) => {
    setAlert(
      {
        msg: message,
        type: type 
      }
    )
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  }
 
 const [mode, setMode] = useState('light');
 const removeBodyClasses = () => {
    document.body.classList.remove('bg-light')
    document.body.classList.remove('bg-dark')
    document.body.classList.remove('bg-primary')
    document.body.classList.remove('bg-danger')
    document.body.classList.remove('bg-success')
    document.body.classList.remove('bg-warning')

    


 }
  
 const togglemode  = (cls) => {
  removeBodyClasses();
  console.log(cls)
  document.body.classList.add('bg-'+cls)
  if (mode === 'light') {
   setMode ('dark');    
   document.body.style.backgroundColor = '#042743';
   showAlert  ("DarkMode is Enabled" ,  "success");
   document.title = "TextUtils - Coloured Mode ";
   setInterval(() => {
    document.title = 'TextUtils is Amazing';
   }, 2000);
   setInterval(() => {
    document.title = 'Install TextUtils Now';
   }, 1500);
  }
  else {
    setMode ('light');
    document.body.style.backgroundColor = 'white';
    showAlert  ("LightMode is Enabled" ,  "success");
    document.title = "TextUtils - Light Mode ";
  }
 }
  return (
    <>
    {/* <BrowserRouter> */}
      < Navbar text="TextUtilsPro" mode={mode} togglemode={togglemode} />
    <Alert  alert = {alert} />
   <div className="container my-3">
   {/* <Routes> */}
        {/* <Route  exact path="/about" element={<About />}/> */}
        <TextForm heading="Text Analyzer"mode= {mode} showAlert = {showAlert}  />
      {/* <Route exact path="/" element={<TextForm heading="Text Analyzer"mode= {mode} showAlert = {showAlert}  />}/>  */}
   {/* </Routes> */}
     {/* <About/>  */}
    { /* <Test /> */ }
    </div>
    {/* </BrowserRouter> */}
    </>
  );
}

export default App;
