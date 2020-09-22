import React, { useState, useEffect } from 'react';
import RenderTodo from './RenderTodo';
import './NewTodo.css'

const NewTodo = () => {
    const [ todo, setTodo ] = useState('');
    const [ data, setData ] = useState([]);

    const todoIsChecked = (id) => {
        data.map(item => {
            if(item.id === Number(id)) {
                item.complete = !item.complete;
                setData(data => [...data] )
                localStorage.setItem('data',JSON.stringify(data))
            }
        })
    }

    const todoIsDeleted = (id) => {
        data.map((item, i) => {
            if(item.id === Number(id) ) {
                data.splice(i, 1)
                setData(data => [...data])
                localStorage.setItem('data',JSON.stringify(data))
            }
        })
    }

    const getCheckedTodo = (childData) => {
        todoIsChecked(childData);
    }

    const getDeletedTodo = (childData) => {
        todoIsDeleted(childData)
    }

    const addNewTodo = () => {
        data.push({text: todo, complete: false, id: Math.floor(Math.random() * 100000000) })
        setData(data => [...data]);
        localStorage.setItem('data',JSON.stringify(data))
    }
    useEffect(() => {
        if (localStorage.getItem !== null ) {
            setData(JSON.parse(localStorage.getItem('data')))
        } 
    },[])
    return(
        <div className = "make-new-todo-wrapper">
            <input className="make-new-todo-input" type="text" placeholder="New Todo" onChange={e =>setTodo(e.target.value)} />
            <input className="make-new-todo-button" type="submit" value="Add" onClick={addNewTodo} />
            <RenderTodo data={data} checkedTodo={getCheckedTodo} deletedTodo={getDeletedTodo} />
        </div>
    )
}

export default NewTodo;