import React, { Component } from 'react';
import './App.css';
class TodoForm extends Component {
	constructor(props) {
		super(props);
		this.state = { newtodo: '' };

		this.onChangehandle = this.onChangehandle.bind(this);
		this.doSubmit = this.doSubmit.bind(this);
	}
	doSubmit(e) {
		e.preventDefault();
		if (this.state.newtodo) {
			this.props.handleSubmit(this.state.newtodo);
			this.setState({ newtodo: '' });
		}
	}

	onChangehandle(e) {
		this.setState({ [e.target.name]: e.target.value });
		console.log(this.state.newtodo);
	}

	render() {
		return (
			<form className='NewTodoForm' onSubmit={this.doSubmit}>
				<input
					type='text'
					onChange={this.onChangehandle}
					value={this.state.newtodo}
					id='newtodo'
					name='newtodo'
					placeholder='What do you need to do?'
				/>

				<button>Add Item</button>
			</form>
		);
	}
}

export default TodoForm;
