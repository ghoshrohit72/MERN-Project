import React from 'react'
import { Link } from 'react-router-dom'
import ArticleList from "../components/ArticleList"
import articleContent from "./Article-content"
const ArticleListPage = () => {
  return (
    <>
        <h1>Article Page</h1>
        <ArticleList articles={articleContent} />
    </>
  )
}

export default ArticleListPage