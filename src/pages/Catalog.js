import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import SortButton from '../components/Sort';


function Catalog() {
  const [data, setData] = useState([]);
  const [sortBy, setSortBy] = useState();

  const { id } = useParams();
  const api_key = '435c8880fa41fdbe5fba133c47f78d2b';
  const BASE_URL = 'https://api.themoviedb.org/3';
  const getImage = (path) => `https://image.tmdb.org/t/p/w300/${path}`;
  const navigate = useNavigate();
  const api = axios.create({ baseURL: BASE_URL });

  useEffect(() => {
    const getUpcoming = api.get('movie/upcoming', { params: { api_key } });

    getUpcoming.then((res) => {
      setData(res.data.results);
    });
  }, []);

  const handleCatalogClick = (id) => {
    navigate(`/catalog/${id}`);
  };

  const handleSortByChange = (value) => {
    setSortBy(value);
  };

  const sortData = (data, sortBy) => {
    switch (sortBy) {
      case 'popularity':
        return [...data].sort((a, b) => b.popularity - a.popularity);
      case 'original_title':
        return [...data].sort((a, b) => a.original_title.localeCompare(b.original_title));
      default:
        return data;
    }
  };

  const sortedData = sortData(data, sortBy);

  return (
    <div className='container '>
      <div className="App">
        <header className="App-header">
          <Helmet>
            <meta charSet="utf-8" />
          </Helmet>
          <SortButton sortBy={sortBy} onSortByChange={handleSortByChange} />


          <div className="grid">
            {sortedData.map((movie) => (
              <div className="item" key={movie.id} onClick={() => handleCatalogClick(movie.id)}>
                <img src={getImage(movie.poster_path)} alt={movie.original_title} />
                <p>{movie.original_title}</p>
                <span>
                  <p className="P-t">Popularity: {movie.popularity}</p>
                </span>
              </div>
            ))}
          </div>
        </header>
      </div>
    </div>
  );
}

export default Catalog;
