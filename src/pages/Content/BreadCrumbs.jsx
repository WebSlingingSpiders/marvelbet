import React from 'react'

const BreadCrumbs = () => {
  return (
    <nav className='breadcrumbs'>
        <ul>
            <li><a href='/'>Home</a></li>
                <span> / </span>
            <li><a  href='/article'>Article</a></li>
                <span> / </span>
            <li><a className='active_link' href='/article/welcome-to-marbelbet'>Welcome to MarbelBet</a></li>
        </ul>
    </nav>
  )
}

export default BreadCrumbs
