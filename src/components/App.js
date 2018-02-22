import React from 'react';
import ArticleList from './Articles/ArticleList';
import Filters from './Filters';

export default function App(props) {
  return (
    <div>
      <Filters/>
      <ArticleList/>
    </div>
  );
}