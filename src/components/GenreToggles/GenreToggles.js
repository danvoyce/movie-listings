import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { toggleGenre } from "../../appState/genres/genres.actions";

import styles from "./GenreToggles.module.css";

class GenreToggles extends Component {
  static propTypes = {};

  static defaultProps = {};

  componentDidMount() {}

  render() {
    const { selected, genresList, toggleGenre, toggleCheckAll } = this.props;
    const buttonText = selected.length ? "Un-check all" : "Check all";

    return (
      <div className={styles.container}>
        <button
          onClick={toggleCheckAll}
          className={styles.toggle}
          type="button"
        >
          {buttonText}
        </button>
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
      </div>
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
  { toggleGenre }
)(GenreToggles);
