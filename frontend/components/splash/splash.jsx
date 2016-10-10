import React from 'react';
import { Link, hashHistory } from 'react-router';
import Modal from 'react-modal';
import SessionFormContainer from '../session_form/session_form_container';
import { SessionModalStyle } from '../modal_styles/session_modal_style';

class Splash extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      loginModalOpen: false,
      signupModalOpen: false
    }

    this.openLoginModal = this.openLoginModal.bind(this);
    this.closeLoginModal = this.closeLoginModal.bind(this);

    this.openSignupModal = this.openSignupModal.bind(this);
    this.closeSignupModal = this.closeSignupModal.bind(this);

    this.demoLogin = this.demoLogin.bind(this);
  }

  openLoginModal() {
    this.setState({ loginModalOpen: true });
  }

  closeLoginModal() {
    this.setState({ loginModalOpen: false });
  }

  openSignupModal() {
    this.setState({ signupModalOpen: true });
  }

  closeSignupModal() {
    this.setState({ signupModalOpen: false });
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
      <div className="login-signup">
        <h1 className="splash-logo">NoteAry</h1>
        <section className="splash-buttons">
          <button className="splash-login-button" onClick={this.openLoginModal}>Log In</button>
          <br/>
          <button className="splash-signup-button" onClick={this.openSignupModal}>Sign Up</button>
          <br/>
          <button className="demo-login-button" onClick={this.demoLogin}>Demo</button>
        </section>

        <Modal
          isOpen={this.state.loginModalOpen}
          style={ SessionModalStyle }
          onRequestClose={this.closeLoginModal}>

          <SessionFormContainer
            formType={"login"}
            closeModal={this.closeLoginModal}/>
        </Modal>

        <Modal
          isOpen={this.state.signupModalOpen}
          style={ SessionModalStyle }
          onRequestClose={this.closeSignupModal}>

          <SessionFormContainer
            formType={"signup"}
            closeModal={this.closeSignupModal}/>
        </Modal>
      </div>
    );
  }
}


export default Splash;
