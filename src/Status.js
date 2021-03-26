import { useHistory } from 'react-router-dom';
import React, { useState } from 'react'
import Post from './Post';


export default function Status(props) {
    const [listPost,setLisPost] = useState(props.listPost)
       
    console.log(listPost)
    
    const renderItem = (item,index) =>{
        <li key ={index}>
            <div>Người đăng bài:{item.name}</div>
            <div>{item.content}</div>
            <img src={item.img} width='300' height='300'></img>
            <div>{item.listJob}</div>            
        </li>
    }
    return (
        
            <ul>
                 {listPost.map(renderItem)}
            </ul>
    )
}
