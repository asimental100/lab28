import React, { Component } from 'react';
import ArticleList from '../components/ArticlesList/ArticleList';
import Search from '../components/Search/Search';
import { fetchNews } from '../services/fetchNews';

export default class ArticleSearch extends Component {
  state = {
    loading: false,
    articles: [],
    text: ''
  }

  handleSearch = () => {
    this.setState({ loading: true });

    fetchNews(this.state.text)
      .then(articles => this.setState({ articles, loading: false }));
  }

  handleChange = ({ target }) => {
    this.setState({ text: target.value });
  }

  render() {
    const { articles, text, loading } = this.state;
    return (
      <div>
        <Search 
          onChange={this.handleChange}
          text={text}
        />
        <button onClick={this.handleSearch}>Search for Articles</button>
        {
          loading ? 
            'Articles are loading' : 
            <ArticleList articles={articles} />
        }
      </div>
    );
  }
}
