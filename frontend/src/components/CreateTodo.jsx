import React, { useState } from 'react'

function CreateTodo() {
    const [title,setTitle] = useState();
    const [description,setDescription] = useState();
  return (
    <div>
    <input type="text" placeholder='title' onChange={(e)=>{
        setTitle(e.target.value);
    }}/><br/>
    <input type="text" placeholder='description'
        onChange={(e)=>{
            setDescription(e.target.value);
        }}
    /><br/>
    <button onClick={()=>{
        fetch("http://localhost:3000/todos",{
            method : "POST",
            body: JSON.stringify({
                title:title,
                description:description
            }),
            headers:{
                "Content-type":"application/json"
            }
        }).then(async function(res){
            const json  = res.json();
            alert("todo added")
        })
    }}>Add a todo</button>
    </div>
  )
}

export default CreateTodo