import React from 'react';

const TodoForm = (props) => {
    return (
        <form onSubmit={props.addColor}>
            <input value={props.currentColor} onChange={props.updateColor} />
            <button type="submit">Submit</button>
        </form>
    )
}

export default TodoForm