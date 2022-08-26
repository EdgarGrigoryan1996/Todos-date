import React, { useState } from 'react'

export default function AddTodoPopup({ status, todos, setTodos }) {
	function checkDate(todos) {
		for (let i = 0; i < todos.length; i++) {
			for (let key in todos[i]) {
				if (todos[i][key] === info.date) {
					return true
				}
			}
		}
		return false
	}
	const [info, setInfo] = useState({
		date: null,
		title: null
	})
	return (
		<div className='add-todo-popup'>
			<div className="popup-block">
				<span className='close-popup' onClick={() => {
					status(false)
				}}>x</span>
				<h2>ADD TODO</h2>
				<div className='data-block'>
					<div className="todo-date">
						<input type="date" onChange={(e) => {
							setInfo({
								date: e.target.value,
								title: info.title
							})
						}} />
					</div>
					<div className="todo-title">
						<input type="text" placeholder='Write Title' onChange={(e) => {
							setInfo({
								date: info.date,
								title: e.target.value
							})
						}} />
					</div>
				</div>

				<div className="todo-add-btn">
					<button className='btn add-todo-btn' onClick={() => {

						if (checkDate(todos)) {
							setTodos(todos.map((todo) => {
								if (todo.date === info.date) {
									return {
										...todo,
										todos: [...todo.todos, { id: Math.random(), status: false, title: info.title }]
									}
								}
								else {
									return todo
								}
							}))
						}
						else {
							setTodos([
								...todos,
								{
									id: Math.random(),
									date: info.date,
									todos: [{
										id: Math.random(),
										status: false,
										title: info.title
									}

									]
								}
							])
						}


						status(false)
					}}>ADD TODO</button>
				</div>
			</div>
		</div>
	)
}
