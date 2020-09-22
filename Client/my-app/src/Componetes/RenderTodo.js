import React from 'react';
import './RenderTodo.css'

const RenderTodo = ({data, checkedTodo, deletedTodo}) => {

    const itemIsChecked = (e) => {
        checkedTodo(e.target.getAttribute('id'))
    }

    const itemISDeleted = (e) => {
        deletedTodo(e.target.getAttribute('id'))
    }
   
    return(
        <div  className="todo-list-wrapper">
            {data.map((item, i) => 
                <div className="todo-list-card" key={i}>
                    <h3 style={item.complete ?{textDecorationLine:'line-through'}: {textDecorationLine:'none'}}>{item.text}</h3>
                    <div className="todo-list-card-right">
                        <input id={item.id} className="todo-list-card-checkbox" type="checkbox" checked={item.complete} onClick={itemIsChecked} />
                        <h5 id={item.id} onClick={itemISDeleted} >delete</h5>
                    </div>
                </div>
            )}

        </div>
    )
}

export default RenderTodo;