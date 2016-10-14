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
    this.refreshTags = this.refreshTags.bind(this);
  }

  componentWillReceiveProps(nextProps){
    if( nextProps.note ){
      this.setState({ currentTags: nextProps.tags });
    }
  }

  refreshTags(){
    this.props.requestNotesTags(this.props.note);
    this.props.requestTags();
  }

  handleDelete(idx){
    this.props.destroyTagging(this.props.tags[idx], this.props.note.id);
    this.refreshTags();

  }

  handleAddition(tag){
    this.props.createTag(tag, this.props.note.id);
    this.refreshTags();
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
