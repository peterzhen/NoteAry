import { connect } from 'react-redux';
import SessionForm from './session_form';
import { login, logout, signup } from '../../actions/session_actions';


const mapStateToProps = ({ session, ownProps }) => ({
  loggedIn: Boolean(session.currentUser),
  errors: session.errors,
});

const mapDispatchToProps = (dispatch, ownProps) => {
  const formType = ownProps.formType;
  const demo = ownProps.demo;
  const processForm = (formType === 'login') ? login : signup;
  return {
    closeModal: ownProps.closeModal,
    processForm: user => dispatch(processForm(user)),
    formType,
    demo
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SessionForm);
