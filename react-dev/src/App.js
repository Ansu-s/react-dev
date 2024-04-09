import React, { useState } from 'react';
import './App.css';
import About from './components/About';
import AlertUser from './components/AlertUser';
import MyNavBar from './components/MyNavBar';
import TextiInputForm from './components/TextiInputForm';

function App() {
  const [alert, setAlert] = useState("This is a alert");

  return (
    <>
      <MyNavBar />
      {/* <Navbar /> */}
      <AlertUser alertMsg="This is an alert"/>
      <div className="container">
        <TextiInputForm />
      </div>
      <About />
    </>
  );
}

export default App;
