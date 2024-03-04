import React from 'react'
import Hero from '../components/home/Hero'
import Favorites from '../components/home/Favorites'
import { Helmet } from 'react-helmet'

const Home = () => {
  return (

    <>
    
    <Helmet>
        <title>MarvelBet: Where Your Cricket Dreams Transform into Mobile Betting Victories</title>
        <meta property="og:image:type" content="image/jpeg" />
        <link rel="alternate" href="https://www.marvel365bet.com/" hreflang="en-BD" />
        <link rel="canonical" href="https://www.marvel365bet.com/"/>
        <link rel="sitemap" type="xml" title="MarvelBet Online Cricket Bet Casino" href="https://www.marvel365bet.com/sitemap.xml"/>
        <meta name="author" content="MarvelBet Online Cricket Bet Casino "/>
        <meta name="copyright" content="MarvelBet Online Cricket Bet Casino 2024"/>
        <meta property="og:locale" content="en-BD"/>
        <meta property="og:type" content="website"/>
        <meta property="og:title" content="MarvelBet: Where Your Cricket Dreams Transform into Mobile Betting Victories!"/>
        <meta property="og:description" content="Welcome to MarvelBet, the epitome of excellence in Bangladesh cricket mobile betting. Our homepage is not just a platform; it's the stage where your cricket passion takes center stage. Immerse yourself in a world of seamless mobile betting, where every match becomes an opportunity for victory."/>
        <meta property="og:url" content="https://www.marvel365bet.com/"/>
        <meta property="og:site_name" content="Marvelbet"/>
        <meta property="og:image" content="https://www.marvel365bet.com/assets/marvel365bet.jpeg"/>
        <meta property="og:image:secure_url" content="https://www.marvel365bet.com/assets/marvel365bet.jpeg"/>
        <meta property="og:image:width" content="1200"/>
        <meta property="og:image:height" content="630"/>
        <meta property="og:image:alt" content="MarvelBet_Cricket_Mobile_Betting"/>
        <meta property="og:image:type" content="image/jpeg"/>

    </Helmet>


      <div >
          <Hero/>
          <Favorites/>
      </div>

    </>

  )
}

export default Home