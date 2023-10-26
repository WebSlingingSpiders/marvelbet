import React from 'react'
import '../../styles/mainarticles.css';

const ArticleMain = () => {
  return (
    <section className='container article_main py-4'>
        <nav className='breadcrumbs1'>
            <ul>
                <li><a href='/'>Home</a></li>
                    <span> / </span>
                <li><a className='active_link' href='/article'>Article</a></li>
                
            </ul>
        </nav>
        <div className="main_article mt-4">
            <div className='article_container bg-black h-3/5 w-auto rounded-xl '>
                    <div class="relative overflow-hidden bg-cover bg-no-repeat h-3/5 rounded-xl">
                        <img
                            src="/assets/hero7.jpg"
                            class="transition duration-300 ease-in-out hover:scale-110 w-full"
                            alt="Louvre" />
                           
                    </div> 
                    <a href="/article/welcome-to-marbelbet"><h2 className='hover:text-red-500 pt-2'>Welcome to MarvelBet</h2></a>
                    <p>Welcome to MarvelBet, your one-stop destination for a thrilling and
                        unique online betting and gaming experience in India. At MarvelBet, we
                        pride ourselves on being India's premier platform for live cricket
                        betting and live casino games..
                    </p>
                    <a href='/article/welcome-to-marbelbet'><h3 className='hover:text-blue-500'>Read More..</h3></a>
            </div>
            <div className='article_container bg-black h-2/5 w-auto rounded-xl'>
                    <div class="relative overflow-hidden bg-cover bg-no-repeat h-3/5 rounded-xl"> 
                        <img
                            src="/assets/hero8.jpg"
                            class="transition duration-300 ease-in-out hover:scale-110 w-full"
                            alt="Louvre" />
                    </div>
                    <a href="/article/welcome-to-marbelbet"><h2 className='hover:text-red-500 pt-2'>Welcome to MarvelBet</h2></a>
                    <p>Welcome to MarvelBet, your one-stop destination for a thrilling and
                        unique online betting and gaming experience in India. At MarvelBet, we
                        pride ourselves on being India's premier platform for live cricket
                        betting and live casino games..
                    </p>
                    <a href='/article/welcome-to-marbelbet'><h3 className='hover:text-blue-500'>Read More..</h3></a>
            </div>
        </div>

        
    </section>
  )
}

export default ArticleMain
