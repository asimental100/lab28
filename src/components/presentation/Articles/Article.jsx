/* eslint-disable max-len */
import React from 'react';
import PropTypes from 'prop-types';
import styles from './Article.css';

function Article({ article }) {
  return (
    <li className={styles.article}>
      <div>
        <h1>{article.title}</h1>
        <p className={styles.author}>Author: {article.author ? article.author : 'Unavailable'}</p>
      </div>
      <p>{article.description}</p>
    </li>
  );
}

Article.propTypes = {
  article: PropTypes.shape({
    title: PropTypes.string,
    author: PropTypes.string,
    description: PropTypes.string
  }).isRequired
};

export default Article;
