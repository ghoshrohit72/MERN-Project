import React from 'react'
import { Link } from 'react-router-dom'
import ArticleContent from "./Article-content"
const ArticlePage = () => {
  return (
    <>
        <h1>Article Page</h1>
        {
          ArticleContent.map((article,key)=>
           <Link className='article-list-item' key={key} to={`/article/${article.name}`}>
            <h3>{article.title}</h3>
            {/* Getiing first 100 charatcters of the string */}
            <p>
              {article.content[0].substring(0,150)}...
            </p>
           </Link> 
          )
        }
    </>
  )
}

export default ArticlePage