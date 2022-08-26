import React, { useState } from 'react'
import Todos from '../todos/Todos'
import "./AddTodo.css"
import AddTodoPopup from './AddTodoPopup'
export default function AddTodo() {
	const [todos, setTodos] = useState([])
	const [popupStatus, setPopupStatus] = useState(false)
	return (
		<div>
			<div className='add-todo-block'>
				<button className='btn add-todo-btn' onClick={() => {
					setPopupStatus(true)
				}}>ADD TODO</button>
			</div>
			{popupStatus !== false ? <AddTodoPopup todos={todos} setTodos={setTodos} status={setPopupStatus} /> : ""}
			<div className="todos-block">
				{todos.length > 0 ? <Todos setTodos={setTodos} todos={todos} /> : "No todos for show"}
			</div>
		</div>

	)
}
