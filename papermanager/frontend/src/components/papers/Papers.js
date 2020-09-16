import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getPapers } from "../../actions/papers";
import { updatePaper } from "../../actions/papers";

export class Papers extends Component {
  state = {
    summary: "",
    future_work: "",
  };

  static propTypes = {
    papers: PropTypes.array.isRequired,
    getPapers: PropTypes.func.isRequired,
  };

  componentDidMount() {
    this.props.getPapers();
  }

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  updateThisPaper(paper) {
    const { summary, future_work } = this.state;
    const id = paper.id;
    const title = paper.title;
    const url = paper.url;
    const updated = {
      id: id,
      title: title,
      url: url,
      summary: summary,
      future_work: future_work,
    };
    this.props.updatePaper(updated);
  }

  // onSubmit = (e) => {
  //   e.preventDefault();
  //   // const { title, url, summary, future_work } = this.state;
  //   // const paper = { title, url, summary, future_work };
  //   // debugger;
  //   // this.props.completePaper(paper);
  // };

  render() {
    const { summary, future_work } = this.state;
    return (
      <Fragment>
        <h2>Papers To Read</h2>
        <form>
          <table className="table table-striped">
            <thead>
              <tr>
                <th>Title</th>
                <th>URL</th>
                <th>Summary</th>
                <th>Research Ideas</th>
                <th />
              </tr>
            </thead>
            <tbody>
              {this.props.papers.map((paper) => (
                <tr key={paper.id}>
                  <td>{paper.title}</td>
                  <td>
                    <a href={paper.url} target="_blank">
                      Link to Paper
                    </a>
                  </td>
                  <td>
                    <textarea
                      name="summary"
                      placeholder="Add your summary..."
                      type="text"
                      onChange={this.onChange}
                      value={summary}
                    ></textarea>
                  </td>
                  <td>
                    <textarea
                      name="future_work"
                      type="text"
                      onChange={this.onChange}
                      value={future_work}
                      placeholder='Hint: "future work"'
                    ></textarea>
                  </td>
                  <td>
                    <button
                      onClick={() => this.updateThisPaper(paper)}
                      className="btn btn-danger btn-sm"
                    >
                      Done
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </form>
      </Fragment>
    );
  }
}

const mapStateToProps = (state) => ({
  papers: state.papers.papers,
});

export default connect(mapStateToProps, { getPapers, updatePaper })(Papers);
