import React from 'react';
import { Link, hashHistory, Router, Route } from 'react-router';
import AlertContainer from 'react-alert';
import SideBarContainer from './side_bar_container';
import IndexContainer from './index_container';
import NoteContainer from './note_container';

class Home extends React.Component{
  constructor(props){
    super(props);

    this.alertOptions = {
      offset: 14,
      position: 'bottom right',
      theme: 'light',
      time: 1500,
      transition: 'fade'
    };
  }

  componentWillMount(){
    this.props.requestNotebooks();
    this.props.requestNotes();
    this.props.requestTags();
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
        <div className="home-container">
          <AlertContainer ref={ alert => global.alert = alert} {...this.alertOptions} />

          <SideBarContainer/>
          <IndexContainer/>
          <NoteContainer/>
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
