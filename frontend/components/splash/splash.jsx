import React from 'react';
import { Link, hashHistory } from 'react-router';


class Splash extends React.Component {
  constructor(props){
    super(props);
    this.demoLogin = this.demoLogin.bind(this);
    this.routeToLogin = this.routeToLogin.bind(this);
    this.routeToSignup = this.routeToSignup.bind(this);
  }

  routeToLogin(e){
    hashHistory.push("/login");
  }

  routeToSignup(e){
    hashHistory.push("/signup");
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
        <h1 className="splash-logo">NOTEary</h1>
        <section className="splash-buttons">
          <button className="splash-login-button" onClick={this.routeToLogin}>Log In</button>
          <br/>
          <button className="splash-signup-button" onClick={this.routeToSignup}>Sign Up</button>
          <br/>
          <button className="demo-login-button" onClick={this.demoLogin}>Demo</button>
        </section>
      </nav>
    );
  }
}


export default Splash;
