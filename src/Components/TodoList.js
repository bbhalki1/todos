import React from 'react';

const TodoList = (props) => {
    return(
        <div>
            <ul>
                {props.values.map(item => (
                    <li key={item.id}>{item.text}</li>
                ))}
            </ul>
        </div>
    )
}

export default TodoList;