import React from 'react';
import { Link } from 'react-router';


class Splash extends React.Component {
  constructor(props){
    super(props);
    this.demoLogin = this.demoLogin.bind(this);
  }

  demoLogin(e){
    e.preventDefault();
    const demoUser = {username: "DemoAccount", password: "password"};
    this.props.login(demoUser);
  }

  render(){
    return(
      <nav className="login-signup">
        <Link to="/login" activeClassName="current">Login</Link>
        <br/>
        <Link to="/signup" activeClassName="current">Sign up!</Link>
        <br/>
        <button className="demo-login-button" onClick={this.demoLogin}>Demo</button>
      </nav>
    );
  }
}


export default Splash;
