import React from 'react';

class UpdateNotebookPrompt extends React.Component {
  constructor(props){
    super(props);
    this.state = this.props.notebook;

    // {
    //   id: this.props.notebook.id,
    //   title: this.props.notebook.title,
    //   description: this.props.notebook.description,
    //   error: ""
    // }

    this.update = this.update.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(field) {
		return e => {
      this.setState({ error: "" });
      this.setState({ [field]: e.currentTarget.value });
    }
	}

  handleSubmit(e){
    e.preventDefault;
    if (this.state.title === ""){
      this.setState({ error: "Title can't be blank!" });
    } else {
      let newState = this.props.notebook;
      newState.title = this.state.title;
      newState.description = this.state.description;
      // {
      //   id: this.state.id,
      //   title: this.state.title,
      //   description: this.state.description
      // }
      this.props.updateNotebook(newState);
      this.props.closeModal();
    }
  }

  render() {
		return (
      <div className="notebook-form-box">
        <button
          className="notebook-close-modal"
          onClick={ this.props.closeModal }/>
  			<form onSubmit={this.handleSubmit} className="notebook-form">
          <div className="add-notebook-label">edit notebook</div>
          <div className="notebook-form-error">{ this.state.error }</div>

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
