import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { fetchGenres, toggleGenre } from "../../appState/genres/genres.actions";

import styles from "./GenreToggles.module.css";

class GenreToggles extends Component {
  static propTypes = {};

  static defaultProps = {};

  componentDidMount() {
    // this.props.fetchGenres();
  }

  render() {
    const { selected, genresList, toggleGenre } = this.props;

    return (
      <ul className={styles.genresList}>
        {genresList.map(({ id, name }) => {
          const isChecked = selected.indexOf(id) > -1;
          return (
            <li key={id} className={styles.genreItem}>
              <input
                type="checkbox"
                id={id}
                onChange={() => toggleGenre(id)}
                checked={isChecked}
              />
              <label className={styles.movieTitle} htmlFor={id}>
                {name}
              </label>
            </li>
          );
        })}
      </ul>
    );
  }
}

const mapStateToProps = state => {
  const { all, selected } = state.genres;

  return {
    genresList: all,
    selected
  };
};

export default connect(
  mapStateToProps,
  { toggleGenre, fetchGenres }
)(GenreToggles);
