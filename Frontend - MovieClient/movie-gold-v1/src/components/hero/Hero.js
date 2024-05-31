import './Hero.css';
import Carousel from 'react-material-ui-carousel';
import { Paper } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCirclePlay } from '@fortawesome/free-solid-svg-icons';
import { Link, useNavigate } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import PropTypes from 'prop-types';

const Hero = ({ movies = [] }) => {  // Provide a default empty array

    const navigate = useNavigate();

    function reviews(movieId) {
        navigate(`/Reviews/${movieId}`);  // Use template literal correctly
    }

    return (
        <div className='movie-carousel-container'>
            <Carousel>
                {
                    Array.isArray(movies) && movies.length > 0 ? (
                        movies?.map((movie) => {
                            return (
                                <Paper key={movie.imdbId}>
                                    <div className='movie-card-container'>
                                        <div className="movie-card" style={{ "--img": `url(${movie.backdrops[0]})` }}>
                                            <div className="movie-detail">
                                                <div className="movie-poster">
                                                    <img src={movie.poster} alt="" />
                                                </div>
                                                <div className="movie-title">
                                                    <h4>{movie.title}</h4>
                                                </div>
                                                <div className="movie-buttons-container">
                                                    <Link to={`/Trailer/${movie.trailerLink.substring(movie.trailerLink.length - 11)}`}>
                                                        <div className="play-button-icon-container">
                                                            <FontAwesomeIcon className="play-button-icon"
                                                                icon={faCirclePlay}
                                                            />
                                                        </div>
                                                    </Link>

                                                    <div className="movie-review-button-container">
                                                        <Button variant="info" onClick={() => reviews(movie.imdbId)} >Reviews</Button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </Paper>
                            )
                        })
                    ) : (
                        <div>No movies available</div>  // Fallback UI when there are no movies
                    )
                }
            </Carousel>
        </div>
    )
}

Hero.propTypes = {
    movies: PropTypes.arrayOf(PropTypes.shape({  // Define the shape of the movie object
        imdbId: PropTypes.string.isRequired,
        backdrops: PropTypes.arrayOf(PropTypes.string).isRequired,
        poster: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        trailerLink: PropTypes.string.isRequired,
    }))
}

export default Hero;
