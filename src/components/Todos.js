import React from 'react'
import TodoItem from './TodoItem'

export default function Todos(props) {
	return (
		<div className='container my-3'>
			<h3 className='my-2'>Todos List</h3>
			<div className='row'>
				{props.todos.length === 0 ? <p>No todos to display.</p> :
					props.todos.map((todo) => {
						return (<TodoItem todo={todo} key={todo.sno} onDelete={props.onDelete} />)
					})}
			</div>
		</div>
	)
}
