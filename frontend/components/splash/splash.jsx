import React from 'react';
import { Link, hashHistory } from 'react-router';


class Splash extends React.Component {
  constructor(props){
    super(props);
    this.demoLogin = this.demoLogin.bind(this);
  }

  demoLogin(e){
    const demoUser = { user: { username: "demo", password: "password" } };
    this.props.login(demoUser);
  }

  componentWillReceiveProps(newProps) {
    this.redirectIfLoggedIn(newProps);
  }

  redirectIfLoggedIn(newProps){
    if ( newProps.loggedIn ) {
      hashHistory.push("/home");
    }
  }

  render(){
    return(
      <nav className="login-signup">
        <h1 className="splash-logo">NoteAry</h1>
        <Link to="/login" className="splash-login">Login</Link>
        <br/>
        <Link to="/signup" className="splash-signup">Sign up!</Link>
        <br/>
        <button className="demo-login-button" onClick={this.demoLogin}>Demo</button>
      </nav>
    );
  }
}


export default Splash;
