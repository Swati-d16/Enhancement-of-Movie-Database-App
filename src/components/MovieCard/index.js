import {Link} from 'react-router-dom'
import './index.css'
const MovieCard = ({movieDetails}) => (
  <div className="movie-card col-6 col-sm-4 col-md-3 mb-3">
    <img
      src={movieDetails.posterPath}
      alt={movieDetails.title}
      className="movie-image"
    />
    <h3 className="movie-title">{movieDetails.title}</h3>
    <p className="movie-rating">Rating: {movieDetails.voteAverage}</p>
  </div>
)

export default MovieCard
