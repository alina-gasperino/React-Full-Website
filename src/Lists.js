import React from 'react'
import Item from './Item'

class Lists extends React.Component{
    render() {
        return(
            <div className = "list-container">
                {this.props.todos.map(todo => (
                    <Item key = {todo.id} todo = {todo}/>
                ))}
            </div>
        )
    }
}
export default Lists