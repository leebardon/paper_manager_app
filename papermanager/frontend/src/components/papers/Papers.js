import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getPapers } from "../../actions/papers";

export class Papers extends Component {
  static propTypes = {
    papers: PropTypes.array.isRequired,
  };

  componentDidMount() {
    this.props.getPapers();
  }

  render() {
    return (
      <div>
        <h1>Papers List</h1>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  papers: state.papers.papers,
});

export default connect(mapStateToProps, { getPapers })(Papers);
