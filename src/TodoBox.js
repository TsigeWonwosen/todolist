import React, { Component } from 'react';
import TodoForm from './TodoForm';
import TodoList from './TodoList';
import uuid from 'uuid/v4';
const initialTodo = [
	{ id: uuid(), task: 'Wake up', complete: false },
	{ id: uuid(), task: 'Eat breakfast', complete: false },
	{ id: uuid(), task: 'Go to work', complete: true },
	{ id: uuid(), task: 'Test 1 2 3 ', complete: true }
];
class TodoBox extends Component {
	constructor(props) {
		super(props);
		this.state = {
			data : JSON.parse(window.localStorage.getItem('data') || initialTodo)
		};
		this.handleNodeRemoval = this.handleNodeRemoval.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleToggleComplete = this.handleToggleComplete.bind(this);
		this.UpdateTaks = this.UpdateTaks.bind(this);
	}

	handleNodeRemoval(nodeId) {
		const todos = this.state.data.filter((d) => d.id !== nodeId);
		this.setState({ data: todos });
		window.localStorage.setItem('data', JSON.stringify(todos));
	}
	handleSubmit(task) {
		const newTodo = { task, id: uuid(), complete: 'false' };
		this.setState(
			{
				data : [ ...this.state.data, newTodo ]
			},
			() => window.localStorage.setItem('data', JSON.stringify(this.state.data))
		);
	}
	componentDidMount() {}

	handleToggleComplete(nodeId) {
		const newTodo = this.state.data.map((t) => {
			if (t.id === nodeId) {
				return { ...t, complete: !t.complete };
			}

			return t;
		});
		this.setState({
			data : newTodo
		});
		window.localStorage.setItem('data', JSON.stringify(this.state.data));
	}

	UpdateTaks(id, updatedTask) {
		const updatedTodos = this.state.data.map((todo) => {
			if (id === todo.id) {
				return { ...todo, task: updatedTask };
			}
			return todo;
		});
		this.setState({ data: updatedTodos });
		window.localStorage.setItem('data', JSON.stringify(updatedTodos));
	}
	render() {
		return (
			<div className='TodoList'>
				<h1>
					Get To Work! <span>An Animated Todo List Made With React.</span>
				</h1>
				<TodoForm data={this.state.data} handleSubmit={this.handleSubmit} />
				<TodoList
					UpdateTaks={this.UpdateTaks}
					data={this.state.data}
					removeNode={this.handleNodeRemoval}
					toggleComplete={this.handleToggleComplete}
				/>
			</div>
		);
	}
}
export default TodoBox;
