import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { fetchMovies } from "../../appState/movies/movies.actions";

import movies from "./MoviesList.fixture";
import styles from "./MovieList.module.css";
import posterImage from "../../images/poster-image.jpg";

console.log("movies:", movies);

class Explorer extends Component {
  static propTypes = {};

  static defaultProps = {};

  componentDidMount() {
    // this.props.fetchMovies();
  }

  render() {
    return (
      <ol className={styles.moviesList}>
        {movies.map(movie => {
          return (
            <li key={movie.id} className={styles.movieItem}>
              <img
                src={posterImage}
                className={styles.posterImage}
                alt={`Movie poster for ${movie.title}`}
              />
              <span className={styles.movieTitle}>{movie.title}</span>
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
