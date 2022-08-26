import React from 'react'
import Todo from './Todo'
import "./Todos.css"
export default function Todos({ setTodos, todos }) {
	return (
		<div className='todos'>
			{todos.map((todo) => {
				return <Todo key={todo.id} setTodos={setTodos} todos={todos} todo={todo} />
			})}
		</div>
	)
}
