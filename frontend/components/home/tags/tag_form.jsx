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

  componentWillReceiveProps(nextProps){
    if( nextProps.note ){
      this.setState({ currentTags: nextProps.tags });
    }
  }

  handleDelete(idx){
    this.props.destroyTagging(this.props.tags[idx], this.props.note.id);
    this.props.requestNotesTags(this.props.note);
  }

  handleAddition(tag){
    this.props.createTag(tag, this.props.note.id);
    this.props.requestNotesTags(this.props.note);
  }

  render(){
    return(
      <div className="note-form-tags">
        <ReactTags
            tags={ this.state.currentTags }
            labelField={'name'}
            handleDelete={ this.handleDelete }
            handleAddition={ this.handleAddition }
            allowDeleteFromEmptyInput={false}/>
      </div>
    );
  }
}

export default TagForm;
