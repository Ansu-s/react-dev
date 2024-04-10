import React, { useState } from 'react';
import './App.css';
import About from './components/About';
import MyNavBar from './components/MyNavBar';
import TextiInputForm from './components/TextiInputForm';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";


function App() {
  const [alert, setAlert] = useState("This is a alert");
// const router = createBrowserRouter([{
//   path: "/about",
//   element: <About/>
// }])
  return (
    <>
     <Router>
      <div>
        <MyNavBar />
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/text">
            <TextiInputForm />
          </Route>
        </Switch>
      </div>
    </Router>
    {/* <Router>
 <Switch>
          <Route path="/about">
            <About />
          </Route>

          <Route path="/text">
            <Home />
          </Route>
        </Switch>
        </Router> */}
      {/* <MyNavBar />
      <Navbar />
      <AlertUser alertMsg="This is an alert"/>
      <div className="container">
        <TextiInputForm />
      </div>
      <About /> */}
    </>
  );
}

export default App;
