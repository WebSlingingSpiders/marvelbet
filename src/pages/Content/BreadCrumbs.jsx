
import { useLocation } from 'react-router-dom'

const BreadCrumbs = () => {
  const location = useLocation();
  const pathname = location.pathname;
  const segments = pathname.split('/');
  const lastSegment = segments[segments.length - 1];
  const words = lastSegment.split("-"); 
  const capitalizedWords = words.map(word => word.charAt(0).toUpperCase() + word.slice(1));
  const resultString = capitalizedWords.join(" ")

  console.log({lastSegment})
 
  return (
    <nav className='breadcrumbs'>
        <ul>
            <li><a href='/'>Home</a></li>
                <span> / </span>
            <li><a href='/article/'>Article</a></li>
                <span> / </span>
            <li><a href={lastSegment}>{resultString}</a></li>
        </ul>
    </nav>
  )
}

export default BreadCrumbs
