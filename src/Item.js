import React from 'react'

class Item extends React.Component{
    render() {
        return(
            <div className = "item">
                <a className = "todo-item" href = "#">
                   {this.props.todo.title}
                </a>
            </div>
        )
    }
}
export default Item