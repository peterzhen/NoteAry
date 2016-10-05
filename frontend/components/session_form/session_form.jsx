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

	navLink() {
		if (this.props.formType === "login") {
			return <Link onClick={this.clearForm} to="/signup" className="nav-link">Sign Up</Link>;
		} else {
			return <Link onClick={this.clearForm} to="/login" className="nav-link">Log In</Link>;
		}
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
			<div className="session-form-container">
        {this.navLink()}
				<form onSubmit={this.handleSubmit} className="session-form-box">
          <br></br>
					<Link to="/" className="header-link"><h1>NoteAry</h1></Link>

					<div className="login-form">
            <h2 className="session-form-type">{this.props.formType}</h2>
						<br/>
							<input type="text"
                placeholder="Username"
								value={this.state.username}
								onChange={this.update("username")}
								className="login-input" />

						<br/>
							<input type="password"
                placeholder="Password"
								value={this.state.password}
								onChange={this.update("password")}
								className="login-input" />

						<br/>
						<input className="session-submit" type="submit" value="Submit" />
            { this.renderErrors() }
					</div>
				</form>
			</div>
		);
	}
}

export default SessionForm;
