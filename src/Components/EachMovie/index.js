import {Link} from 'react-router-dom'
import {AiFillStar} from 'react-icons/ai'
import 'bootstrap/dist/css/bootstrap.css';

import './index.css'

const EachMovie = (props) => {
    const {movieDetails} = props
    const {title,poster,rating,id} = movieDetails
    return(
        <li className='movie-list-item-container'>
            <Link className='link-style' to={`/shows/${id}`}>
                <img alt="movie" className='poster-img' src={poster.medium} />
                <div className='title-container'>
                    <h1 className='title'>{title}</h1>
                    <div className='rating-container'>
                        <AiFillStar className='star' />
                        <p className='rating'>{rating.average}</p>
                    </div>
                </div>
            </Link>
        </li>
    )
}

export default EachMovie