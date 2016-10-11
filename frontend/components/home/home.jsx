import React from 'react';
import { Link, hashHistory, Router, Route } from 'react-router';
import SideBarContainer from './side_bar_container';
import IndexContainer from './index_container';
import NoteContainer from './note_container';

class Home extends React.Component{
  constructor(props){
    super(props);
  }

  componentWillMount(){
    this.props.requestNotebooks();
    this.props.requestNotes();
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
