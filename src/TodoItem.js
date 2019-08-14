import React, { Component } from 'react';
import './App.css';
class TodoItem extends Component {
	constructor(props) {
		super(props);
		this.state = {
			taskValue : this.props.task,
			editMode  : false
		};
		this.removeNode = this.removeNode.bind(this);
		this.toggleCompleted = this.toggleCompleted.bind(this);
		this.handleTodoEdit = this.handleTodoEdit.bind(this);
		this.toggleEdit = this.toggleEdit.bind(this);
		this.handleUpdate = this.handleUpdate.bind(this);
	}
	handleTodoEdit(e) {
		this.setState({
			[e.target.name]: e.target.value
		});
	}
	removeNode(evt) {
		this.props.removeNode(this.props.id);
	}
	toggleCompleted(evt) {
		this.props.toggleComplete(this.props.id);
	}

	toggleEdit() {
		this.setState({ editMode: !this.state.editMode });
	}
	handleUpdate(evt) {
		evt.preventDefault();
		this.props.updateClass(this.props.id, this.state.taskValue);
		this.setState({ editMode: false });
		console.log('Save ---', this.state.taskValue);
	}

	render() {
		let result;
		if (this.state.editMode) {
			result = (
				<div className='Todo-edit-form'>
					<form onSubmit={this.handleUpdate}>
						<input
							type='text'
							value={this.state.taskValue}
							name='taskValue'
							onChange={this.handleTodoEdit}
						/>
						<button className='btn btn-xs btn-success '>Save</button>
					</form>
				</div>
			);
		}
		else {
			result = (
				<div className='Todo-task'>
					<div className='pull-right todo' role='group'>
						<button className=' Todo-buttons' onClick={this.toggleCompleted}>
							&#x2713;
						</button>
						<li
							className={
								this.props.complete ? (
									'list-group-item-success todo-task  clearfix completed'
								) : (
									'list-group-item clearfix todo-task notcompleted'
								)
							}>
							<span> {this.props.task} </span>
						</li>

						<button className=' Todo-buttons ' onClick={this.toggleEdit}>
							<i className='fas fa-pen' />
						</button>
						<button type='button' className=' Todo-buttons' onClick={this.removeNode}>
							<i className='fas fa-trash' />
						</button>
					</div>
				</div>
			);
		}
		return result;
	}
}
export default TodoItem;
