import React from 'react'
import { WithContext as ReactTags } from 'react-tag-input';

class TagForm extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      currentTags: this.props.tags
    };

    this.handleDelete = this.handleDelete.bind(this);
    this.handleAddition = this.handleAddition.bind(this);
  }

  // componentWillMount(){
  //   this.setState(this.props.note);
  // }
  //
  componentWillReceiveProps(nextProps){
    if( nextProps.note ){
      this.setState({ currentTags: nextProps.tags });
    }
  }

  handleDelete(e){

  }

  handleAddition(e){

  }

  render(){
    return(
      <div className="note-form-tags">
        <ReactTags
            tags={ this.state.currentTags }
            labelField={'name'}
            handleDelete={ this.handleDelete }
            handleAddition={ this.handleAddition }/>
      </div>
    );
  }
}

export default TagForm;
