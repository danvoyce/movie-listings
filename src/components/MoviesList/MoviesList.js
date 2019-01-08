import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { fetchMovies } from "../../appState/movies/movies.actions";

class Explorer extends Component {
  static propTypes = {};

  static defaultProps = {};

  componentDidMount() {
    this.props.fetchMovies();
  }

  render() {
    return "???";
  }
}

const mapStateToProps = state => {
  console.log("state:", state);

  return {};
};

export default connect(
  mapStateToProps,
  { fetchMovies }
)(Explorer);
