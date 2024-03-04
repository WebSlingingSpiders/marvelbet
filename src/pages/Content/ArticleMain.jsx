import React from "react";
import "../../styles/mainarticles.css";
import { main_articles } from "./ArticleContent";
import { Helmet } from "react-helmet";

const ArticleMain = () => {
  return (

<>
      <Helmet>
        <title>In-Depth Insights Await on MarvelBet's Betting Information Articles</title> 
        <meta name="keywords" content="Cricket Betting Insights,Mobile Betting Tips,MarvelBet Articles,Betting Strategies,Expert Analyses"/>
        <link rel="alternate" href="https://www.marvel365bet.com/article" hreflang="en-BD"/>
        <link rel="canonical" href="https://www.marvel365bet.com/article"/>
        <link rel="sitemap" type="xml" title="MarvelBet Online Cricket Bet Articles" href="https://www.marvel365bet.com/sitemap.xml"/>
        <meta name="author" content="MarvelBet Online Cricket Bet Articles"/>
        <meta name="copyright" content="MarvelBet Online Cricket Bet Articles 2024"/>
        <meta property="og:locale" content="en-BD"/>
        <meta property="og:type" content="website"/>
        <meta property="og:title" content="In-Depth Insights Await on MarvelBet's Betting Information Articles"/>
        <meta property="og:description" content="Dive into the realm of cricket betting mastery with MarvelBet's comprehensive betting information articles. Explore strategies, match analyses, and expert insights, ensuring you stay ahead in the dynamic world of mobile betting. Unveil the secrets to successful bets and elevate your game with MarvelBet's curated content."/>
        <meta property="og:url" content="https://www.marvel365bet.com/article"/>
        <meta property="og:site_name" content="Marvelbet"/>
        <meta property="og:image" content="https://www.marvel365bet.com/assets/marvel365bet.jpeg"/>
        <meta property="og:image:secure_url" content="https://www.marvel365bet.com/assets/marvel365bet.jpeg"/>
        <meta property="og:image:width" content="1200"/>
        <meta property="og:image:height" content="630"/>
        <meta property="og:image:alt" content="MarvelBet_Betting_Information"/>
        <meta property="og:image:type" content="image/jpeg"/>
      </Helmet>

    <section className="text-white body-font">
      <div className="container content_container">
        <nav className="breadcrumbs">
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <span> / </span>
            <li>
              <a href="/article/">Article</a>
            </li>
          </ul>
        </nav>
        <div class="container  mx-auto">
          <div class="flex flex-wrap -m-4">
            {main_articles.map((main_article, index) => {
              return (
                <div class="p-4 md:w-1/3" key={index}>
                  <div class="h-full border-2 border-gray-200 border-opacity-08 rounded-lg overflow-hidden">
                    <a href={`/article/${main_article.slug}`}>
                      <img
                        classname="lg:h-52 md:h-36 w-full bg-cover object-center"
                        src={main_article.img}
                        alt="blog "
                      />
                    </a>
                    <div class="p-6">
                      <h2 class="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
                        JeetWin Guide | {main_article.date}
                      </h2>
                      <h1 class="title-font text-2xl font-semibold text-white mb-3">
                        {main_article.sub_title}
                      </h1>
                      {main_article.content.map((content, index) => (
                        <p class="leading-relaxed mb-3" key={index}>
                          {content}
                        </p>
                      ))}
                      <div class="flex items-center flex-wrap ">
                        <a
                          class="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0"
                          href={`/article/${main_article.slug}`}
                        >
                          Read More
                          <svg
                            class="w-4 h-4 ml-2"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            stroke-width="2"
                            fill="none"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          >
                            <path d="M5 12h14"></path>
                            <path d="M12 5l7 7-7 7"></path>
                          </svg>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
    </>


  );
};

export default ArticleMain;
