import React from 'react'

const BreadCrumbs = () => {
  return (
    <nav className='breadcrumbs'>
        <ul>
            <li><a href='/'>Home</a></li>
                <span> / </span>
            <li><a style={{color:"#f04b51"}} href='/about'>Article</a></li>
        </ul>
    </nav>
  )
}

export default BreadCrumbs
