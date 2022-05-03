import React from 'react'
import {useParams} from 'react-router-dom'
import articleContent from './Article-content'
import ArticleList from '../components/ArticleList'
const ArticlePage = () => {

  const {name}  = useParams();
  const article = articleContent.find(article => article.name === name)
  if(!article) return <h1>Article doesnt exist</h1>

  //filtering other articles except the artciles that we are on
  
  const otherArticles  = articleContent.filter(article => article.name !== name )

  return (
    <>
        <h1>{article?.title}</h1>
        {article.content.map((paragraph,key) => (
          <p key={key}>{paragraph}</p>
        ))}
        <h3>Other Articles : </h3>
        <ArticleList articles={otherArticles} />
    </>
  )
}

export default ArticlePage