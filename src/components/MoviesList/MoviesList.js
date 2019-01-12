import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { fetchMovies } from "../../appState/movies/movies.actions";

import movies from "./MoviesList.fixture";

class Explorer extends Component {
  static propTypes = {};

  static defaultProps = {};

  componentDidMount() {
    // this.props.fetchMovies();
  }

  render() {
    return (
      <ol className="moviesList layoutGrid">
        {movies.map(movie => {
          // console.log("movie:", movie);
          return (
            <li key={movie.id} className="movieItem">
              {movie.title}
            </li>
          );
        })}
      </ol>
    );
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
