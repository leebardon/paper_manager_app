import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getPapers } from "../../actions/papers";

export class Papers extends Component {
  static propTypes = {
    papers: PropTypes.array.isRequired,
    getPapers: PropTypes.func.isRequired,
  };

  componentDidMount() {
    this.props.getPapers();
  }

  // LEE - this method does not persist, come back later!!!
  readPaper = (e) => {
    e.preventDefault();
    e.target.className = "btn btn-success btn-sm";
  };

  render() {
    return (
      <Fragment>
        <h2>Papers</h2>
        <table className="table table-striped">
          <thead>
            <tr>
              <th>Title</th>
              <th>URL</th>
              <th>Summary</th>
              <th>Future Work</th>
              <th />
            </tr>
          </thead>
          <tbody>
            {this.props.papers.map((paper) => (
              <tr key={paper.id}>
                <td>{paper.title}</td>
                <td>{paper.url}</td>
                <td>{paper.summary}</td>
                <td>{paper.future_work}</td>
                <td>
                  <button
                    className="btn btn-danger btn-sm"
                    onClick={this.readPaper}
                  >
                    Done
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </Fragment>
    );
  }
}

const mapStateToProps = (state) => ({
  papers: state.papers.papers,
});

export default connect(mapStateToProps, { getPapers })(Papers);
