import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { addPaper } from "../../actions/papers";

export class Form extends Component {
  state = {
    title: "",
    url: "",
  };

  static propTypes = {
    addPaper: PropTypes.func.isRequired,
  };

  onChange = (e) => this.setState({ [e.target.name]: e.target.value });

  onSubmit = (e) => {
    e.preventDefault();
    const { title, url } = this.state;
    const paper = { title, url };
    this.props.addPaper(paper);
    this.setState({
      title: "",
      url: "",
    });
  };

  render() {
    const { title, url } = this.state;
    return (
      <div className="card card-body mt-4 mb-4">
        <h2>Add Paper</h2>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label>Title</label>
            <input
              className="form-control"
              type="text"
              name="title"
              onChange={this.onChange}
              value={title}
            />
          </div>
          <div className="form-group">
            <label>URL</label>
            <input
              className="form-control"
              type="url"
              name="url"
              onChange={this.onChange}
              value={url}
            />
          </div>
          <div className="form-group">
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default connect(null, { addPaper })(Form);
