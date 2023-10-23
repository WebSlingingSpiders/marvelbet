import React from 'react'
import { articles } from './Article'

const MainContent = () => {
  return (
    <div className='content'>
        <h1>
          Welcome to MarvelBet - Your Ultimate Destination for Thrilling Sports
          Betting and Live Casino Action in India
        </h1>
        <p>
          Welcome to MarvelBet, your one-stop destination for a thrilling and
          unique online betting and gaming experience in India. At MarvelBet, we
          pride ourselves on being India's premier platform for live cricket
          betting and live casino games. Whether you're a sports enthusiast or a
          casino gaming aficionado, MarvelBet offers an unparalleled range of
          betting options and casino games that guarantee endless excitement and
          the chance to win big.
        </p>

        {
            articles.map((article,index) => {
            const slug = article.title.toLowerCase().replace(/ /g, '-')
            return (
                <div key={index}>
                    <h2>
                        <a href={`/article/${slug}/${article.id}`}>{article.title}</a>
                    </h2>
                    {article.content.map((content,index) => (
    
                        <p key={index}>{content}</p>
    
                    ))}       
                </div>
                    )
        })}

        <p>
          Don't miss out on the action. Join MarvelBet today and let the games
          begin!
        </p>
    </div>
  )
}

export default MainContent
