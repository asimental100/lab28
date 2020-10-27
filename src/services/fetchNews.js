/* eslint-disable max-len */
export const fetchNews = (searchTerm) => {
  return fetch(`https://newsapi.org/v2/everything?q=${searchTerm}&apiKey=51ab7ba0176f4511be82c7d58f425135`)
    .then(res => res.json())
    .then(json => json.articles.map(article => ({
      title: article.title,
      author: article.author,
      description: article.description
    })));
};
