import React from 'react'
import { useEffect, useState } from 'react'
import { articles } from './Article'
import { useParams } from 'react-router-dom'

const ArticlePage = () => {

const [ content, setContent ] = useState([])
const { slug, id } = useParams()

//console.log({articles})

const contentData = articles.filter(article => article.id === Number(id))
  return (

<section className="section-iccwin my-5">
    <div className='container'>

        <nav className='breadcrumbs'>
            <ul>
                <li><a href='/'>Home</a></li>
                    <span> / </span>
                <li><a href='/article'>Article</a></li>
                <span> / </span>
                <li><a style={{color:"#f04b51"}} href='#'>{contentData[0].title}</a></li>
            </ul>
        </nav>

          <h1>{contentData[0].title}</h1>
          {
            contentData[0].content.map((content,index) => (

              <p class="leading-relaxed" key={index}>
                
                    {content}
            
              </p>

            ))
          }

    </div>
</section>
  )
}

export default ArticlePage
