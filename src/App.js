import React, { useState } from "react";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Main from '.components/Main.js';


function SignInState(props) {
  return (
  <div className="form-group username">
    <div className="form-group">
      <i className="fas fa-user"></i>
      <input type="text" className="form-control" placeholder="Username" required></input>
      <i className="fas fa-arrow-right"></i>
    </div>
    <div className="form-group password">
      <i className="fas fa-user"></i>
      <input type="password" className="form-control" placeholder="Username" required></input>
      <i className="fas fa-arrow-right"></i>
    </div>
    <button onClick={props.onLoggedIn(true)}>Sign In</button>
  </div>
  );
}

function App() {
  const [isLoggedIn, setLoggedIn] = useState(false);
  console.log(isLoggedIn);
  return (
    <div>
    {isLoggedIn && <Main />}
    {!isLoggedIn && <SignInState onLoggedIn = {setLoggedIn} />}
    </div>
  );
}


export default App;
