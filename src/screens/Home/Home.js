import React, { Component } from "react";
import { connect } from "react-redux";

import GenreToggles from "../../components/GenreToggles/GenreToggles";
import MoviesList from "../../components/MoviesList/MoviesList";
import { fetchMovies } from "../../appState/movies/movies.actions";
import {
  fetchGenres,
  toggleCheckAll
} from "../../appState/genres/genres.actions";

class HomePage extends Component {
  componentDidMount() {
    this.props
      .fetchGenres()
      .then(() => this.props.toggleCheckAll())
      .then(() => this.props.fetchMovies());
  }

  render() {
    return (
      <>
        <GenreToggles />
        <MoviesList />
      </>
    );
  }
}

export default connect(
  () => ({}),
  { fetchMovies, fetchGenres, toggleCheckAll }
)(HomePage);
