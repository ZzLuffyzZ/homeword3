import React from 'react'
import { useState } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import Post from './Post'
import Status from './Status'

export default function Navigation() {
    const[listPost,setListPost] = useState([])
    const addList = (newList) =>{
        setListPost([newList,...listPost])
    }
    return (
    <Router>
        <Route  exact path='/' render={()=><Post addList={addList}   />}/>
        <Route path='/status' render={()=><Status  listPost={listPost}  />}/>
    </Router>
    )
}
