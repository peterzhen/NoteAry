import React from 'react';
import { Link, hashHistory } from 'react-router';

class SessionForm extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			username: "",
			password: ""
		};
    this.errors = this.props.errors;
		this.handleSubmit = this.handleSubmit.bind(this);
    this.clearForm = this.clearForm.bind(this);
	}

	componentDidUpdate() {
		this.redirectIfLoggedIn();
	}

	redirectIfLoggedIn(){
		if (this.props.loggedIn) {
			hashHistory.push("/");
		}
	}

	update(field) {
		return e => this.setState({
			[field]: e.currentTarget.value
		});
	}

	handleSubmit(e) {
		e.preventDefault();
		const user = this.state;
		this.props.processForm({user});
	}

  clearForm(){
    this.setState({
			username: "",
			password: "",
		});
  }

	renderErrors() {
    if ( this.errors !== this.props.errors ){
      this.errors = this.props.errors;
      return(
        <ul className="session-errors">
          {this.props.errors.map((error, i) => (
            <li key={`error-${i}`}>
              {error}
            </li>
          ))}
        </ul>
      );
    } else {
      return (
        <div></div>
      );
    }
	}

	render() {
		return (
			<div className="session-form-box">
				<form onSubmit={this.handleSubmit} className="login-form">
					<button
						className="session-close-modal"
						onClick={ this.props.closeModal }/>
					
          <h2 className="session-form-type">{this.props.formType}</h2>

					<input type="text"
            placeholder="Username"
						value={this.state.username}
						onChange={this.update("username")}
						className="login-input" />

					<input type="password"
            placeholder="Password"
						value={this.state.password}
						onChange={this.update("password")}
						className="login-input" />

					<input className="session-submit" type="submit" value="Submit" />
          { this.renderErrors() }
				</form>
			</div>
		);
	}
}

export default SessionForm;
