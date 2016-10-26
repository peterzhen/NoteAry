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
      demoModalOpen: false,
      signupModalOpen: false
    }

    this.openLoginModal = this.openLoginModal.bind(this);
    this.openDemoModal = this.openDemoModal.bind(this);
    this.openSignupModal = this.openSignupModal.bind(this);

    this.closeLoginModal = this.closeLoginModal.bind(this);
    this.closeDemoModal = this.closeDemoModal.bind(this);
    this.closeSignupModal = this.closeSignupModal.bind(this);

    this.demoLogin = this.demoLogin.bind(this);
  }

  openLoginModal() {
    this.setState({ loginModalOpen: true });
  }

  closeLoginModal() {
    this.setState({ loginModalOpen: false });
  }

  openDemoModal() {
    this.setState({ demoModalOpen: true });
  }

  closeDemoModal() {
    this.setState({ demoModalOpen: false });
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
        <div className="splash-items">
          <div className="splash-logo"></div>
          <section className="splash-buttons">
            <div className="phrase1">GET ALL YOUR THOUGHTS</div>
            <div className="phrase2">NOTE-ARIZED</div>
            <button className="splash-signup-button" onClick={this.openSignupModal}>Sign Up</button>
            <br/>
            <button className="splash-login-button" onClick={this.openLoginModal}>Log In</button>
            <br/>
            <button className="demo-login-button" onClick={this.demoLogin}>Demo</button>
          </section>
        </div>

        <Modal
          isOpen={this.state.loginModalOpen}
          style={ SessionModalStyle }
          onRequestClose={this.closeLoginModal}>

          <SessionFormContainer
            formType={"login"}
            demo={"false"}
            closeModal={this.closeLoginModal}/>
        </Modal>

        <Modal
          isOpen={this.state.demoModalOpen}
          style={ SessionModalStyle }
          onRequestClose={this.closeDemoModal}>

          <SessionFormContainer
            formType={"login"}
            demo={"true"}
            closeModal={this.closeDemoModal}/>
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
