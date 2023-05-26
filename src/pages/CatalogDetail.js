import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

const CatalogDetail = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const api_key = '435c8880fa41fdbe5fba133c47f78d2b';
  const BASE_URL = 'https://api.themoviedb.org/3';
  const getImage = (path) => `https://image.tmdb.org/t/p/w300/${path}`;

  useEffect(() => {
    const api = axios.create({ baseURL: BASE_URL });
    const getMovie = api.get(`movie/${id}`, { params: { api_key } });

    getMovie.then((res) => {
      setMovie(res.data);
    });
  }, [id]);

  if (!movie) {
    return null;
  }

  return (
    <div className='flex container'>
      <div className='CD-container'>
        <h3>{movie.original_title}</h3>
        <img className='Img-A' src={getImage(movie.poster_path)} alt={movie.original_title} />
        <p>Popularity: {movie.popularity}</p>
        <p>Duration: {movie.runtime} minutes</p>
        <p>Release Year: {movie.release_date.substring(0, 4)}</p>
        <p>Genres: {movie.genres.map((genre) => genre.name).join(', ')}</p>
        <Link to="/NotFound" className="add-movie-button">Watch Now</Link>
      </div>
    </div>
  );
};

export default CatalogDetail;
