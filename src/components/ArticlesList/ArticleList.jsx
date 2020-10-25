import React from 'react';
import PropTypes from 'prop-types';
import Article from '../Articles/Article';

function ArticleList({ articles }) {
  const ArticleElements = articles.map(article => (
    <Article key={article.title} article={article}/>
  ));

  ArticleList.propTypes = {
    articles: PropTypes.arrayOf(PropTypes.shape({
      title: PropTypes.string,
      author: PropTypes.string,
      content: PropTypes.string,
    })).isRequired
  };
  
  return (
    <div>
      <ul>
        {ArticleElements}
      </ul>
    </div>
  );
}


export default ArticleList;
