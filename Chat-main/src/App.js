import React from 'react';
import {useState,useEffect} from 'react'

import './App.css';
import {BrowserRouter as Router,Route} from "react-router-dom"
import HomePage from "./containers/HomePage"
import LoginPage from "./containers/LoginPage"
import RegisterPage from "./containers/RegisterPage"
import PrivateRoute from "./components/PrivateRoute"
import {isLoggedInUser} from "./actions"
import {useDispatch,useSelector} from "react-redux"

function App() {
  const dispatch = useDispatch()
  const auth = useSelector(state=>state.auth)
  useEffect(()=>{
    if(!auth.authenticated){
      dispatch(isLoggedInUser())
    }
  },[])
  return (
    <div className="App">
      <Router>
      {/* only logged in user can see and access the home route*/}
         <PrivateRoute path="/" exact component={HomePage}/>
           {/*anybody can see*/}
         <Route path = "/login" component={LoginPage}/>
         <Route path="/signup" component={RegisterPage}/>
      </Router>
      
    </div>
  );
}

export default App;
