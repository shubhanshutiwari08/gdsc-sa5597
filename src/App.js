import { useEffect } from 'react';
import jwt_decode from "jwt-decode";
import './App.css';

function App() {
  const google = window.google;
  function handleResponse(response){
    console.log("Encoded JWT ID token :"+ response.credential);
    var user =jwt_decode(response.credential);
    console.log(user);
  };


  useEffect(()=>{
    // global google 
    google.accounts.id.initialize({
      client_id: "344326936290-65lj4u1erq1atenou2ho2t49c69vfsql.apps.googleusercontent.com",
      callback: handleResponse
    })
  });

  google.accounts.id.renderButton(
    document.getElementById("signin"),
    {theme:"outline",size:"large"}
  );

  return (
    <div className="App">
      <h1>hello</h1>
      <div id="signin"></div>
    </div>
  );
}

export default App;
