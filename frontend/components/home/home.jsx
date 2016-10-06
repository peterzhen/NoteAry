import React from 'react';
import { Link, hashHistory, Router, Route } from 'react-router';
import SideBarContainer from './side_bar_container';

class Home extends React.Component{
  constructor(props){
    super(props);
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
          <SideBarContainer/>
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
