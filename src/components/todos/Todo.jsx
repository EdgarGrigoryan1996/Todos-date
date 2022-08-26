import React, { useState } from 'react'
import DateTodos from './DateTodos'

export default function Todo({ setTodos, todos, todo }) {
	const [status, setStatus] = useState(false)
	return (
		<div className="todo-content">
			<div className='todo-block' onClick={() => {
				setStatus(true)
			}}>
				<h2>{todo.date}</h2>
			</div>

			{status === true ? <DateTodos setTodos={setTodos} state={todos} todos={todo} status={setStatus} /> : ""}
		</div>

	)
}
