import React from 'react';
import { Link, hashHistory, Router } from 'react-router';

class Home extends React.Component{
  constructor(props){
    super(props);
    this.state = { loggedIn: this.loggedIn };
    this.handleLogout = this.handleLogout.bind(this);
  }

  handleLogout(e){
    this.props.logout();
  }

  componentWillUpdate() {
  }

  render (){
    return(
      <div>
        <button className="logout-button" onClick={this.handleLogout}>Log Out</button>
        <h1>{this.props.user.username}</h1>
      </div>
    );
  }
}


export default Home;
