import React from 'react'

export default function DateTodos({ setTodos, status, state, todos }) {
	console.log(todos.todos.length)
	return (
		<div className='popup-todos'>
			<div className="popup-todos-block">
				<div className="close-popup" onClick={() => {
					status(false)
				}}>x</div>
				<div className="date">{todos.date}</div>

				{todos.todos.length > 0 ? <div className="todos">
					{todos.todos.map((todo) => {
						return (
							<div className="title">
								<input type="checkbox" onChange={() => {
									console.log(todos.date)
								}} /> {todo.title} <button onClick={() => {

									setTodos(state.map((stateTodo) => {

										if (todos.date !== stateTodo.date) {
											return stateTodo
										}
										else {
											return {
												...stateTodo,
												todos: stateTodo.todos.filter((todosTodo) => {
													return todosTodo.id !== todo.id
												})


											}


										}
									}))
								}}>x</button>
							</div>
						)
					})}
				</div>
					: "not todos"}
			</div>
		</div>
	)
}
