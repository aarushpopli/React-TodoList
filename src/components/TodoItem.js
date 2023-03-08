import React from 'react'

export default function TodoItem(props) {
	let badge_color = props.todo.category === "Important" ? "warning" : "danger";
	return (
			<div className='col-md-3'>
				<div className="card mb-4">
					<div className="card-body">
						<span className={`badge text-bg-${badge_color} float-end my-1`}>{props.todo.category}</span>
						<h5 className="card-title">{props.todo.title}</h5>
						<p className="card-text">{props.todo.desc}</p>
						<button className='btn btn-success btn-sm' onClick={() => { props.onDelete(props.todo) }}>Delete</button>
					</div>
				</div>
			</div>
	)
}
