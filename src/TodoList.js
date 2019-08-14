import React, { Component } from 'react';
import TodoItem from './TodoItem';
import './App.css';

class TodoList extends Component {
	constructor(props) {
		super(props);
		this.removeNode = this.removeNode.bind(this);
		this.toggleComplete = this.toggleComplete.bind(this);
		// this.updateClass = this.updateClass.bind(this);
	}

	// updateClass(id, todo) {
	// 	this.props.UpdateTaks(id, todo);
	// }
	removeNode(nodeId) {
		this.props.removeNode(nodeId);
	}
	toggleComplete(nodeId) {
		this.props.toggleComplete(nodeId);
	}
	render() {
		const listNodes = this.props.data.map((listItem) => {
			return (
				<TodoItem
					key={listItem.id}
					id={listItem.id}
					task={listItem.task}
					complete={listItem.complete}
					updateClass={this.props.UpdateTaks}
					removeNode={this.removeNode}
					toggleComplete={this.toggleComplete}
				/>
			);
		});
		return (
			<div>
				<ul className='todo-list'>{listNodes}</ul>{' '}
			</div>
		);
	}
}
export default TodoList;
