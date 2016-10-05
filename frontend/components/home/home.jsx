import React from 'react';
import { Link, hashHistory, Router, Route } from 'react-router';
import App from '../app';

class Home extends React.Component{
  constructor(props){
    super(props);
    this.handleLogout = this.handleLogout.bind(this);
  }

  handleLogout(e){
    this.props.logout();
  }

  componentWillReceiveProps(newProps) {
    this.redirectIfLoggedOut(newProps);
  }

	redirectIfLoggedOut(newProps){
		if ( !newProps.loggedIn ) {
			hashHistory.push("/");
		}
	}

  render (){
    if (this.props.loggedIn) {
      return(
        <div>
          <button className="logout-button" onClick={this.handleLogout}>Log Out</button>
          <h1>{this.props.user.username}</h1>
        </div>
      );
    } else {
      return(
        <h2>Logging Out...</h2>
      );
    }
  }
}


export default Home;
