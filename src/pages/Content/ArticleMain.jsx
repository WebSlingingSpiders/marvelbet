import React from 'react'
import '../../styles/mainarticles.css'
import { main_articles } from './ArticleContent';


const ArticleMain = () => {
  return (
    <section className='text-white body-font'>
        <div className='container content_container'>
            <nav className='breadcrumbs'>
                    <ul>
                        <li><a href='/'>Home</a></li>
                            <span> / </span>
                        <li><a href='/article/'>Article</a></li>
                    </ul>
            </nav>
            <div class="container  mx-auto">
                <div class="flex flex-wrap -m-4">
                {
                main_articles.map((main_article,index) => { 
                return (
                <div class="p-4 md:w-1/3" key={index}>
                    <div class="h-full border-2 border-gray-200 border-opacity-08 rounded-lg overflow-hidden">
                        <a href={`/article/${main_article.slug}`}>
                            <img classname="lg:h-52 md:h-36 w-full bg-cover object-center" src={main_article.img} alt="blog" />
                        </a>
                        <div class="p-6">
                            <h2 class="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">JeetWin Guide | {main_article.date}</h2>
                            <h1 class="title-font text-2xl font-semibold text-white mb-3">{main_article.sub_title}</h1>
                            {main_article.content.map((content,index) => (
                                    <p class="leading-relaxed mb-3" key={index}>{content}</p>
                            ))} 
                            <div class="flex items-center flex-wrap ">
                                <a class="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0" href={`/article/${main_article.slug}`}>Read More
                                    <svg class="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                    <path d="M5 12h14"></path>
                                    <path d="M12 5l7 7-7 7"></path>
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>                  
                    )
                })}
                </div>
            </div>
        </div>
    </section>
  )
}

export default ArticleMain
