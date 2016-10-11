import React from 'react';

class UpdateNotebookPrompt extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      title: this.props.notebook.title,
      description: this.props.notebook.description
    }
      this.update = this.update.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(field) {
		return e => this.setState({
			[field]: e.currentTarget.value
		});
	}

  handleSubmit(e){
    e.preventDefault;
    let newState = this.props.notebook;
    newState.title = this.state.title;
    newState.description = this.state.description;
    this.props.updateNotebook(newState);
    this.props.closeModal();
  }

  render() {
		return (
      <div className="notebook-form-box">
        <button
          className="notebook-close-modal"
          onClick={ this.props.closeModal }/>
  			<form onSubmit={this.handleSubmit} className="notebook-form">
          <div className="add-notebook-label">edit notebook</div>

					<input type="text"
            placeholder="Title your notebook"
						value={this.state.title}
						onChange={this.update("title")}
						className="notebook-title-input" />

          <input type="text"
            placeholder="Add a description"
						value={this.state.description}
						onChange={this.update("description")}
						className="notebook-description-input" />

          <input className="notebook-form-submit" type="submit" value="Update"/>
			</form>
    </div>
		);
	}

}

export default UpdateNotebookPrompt;
