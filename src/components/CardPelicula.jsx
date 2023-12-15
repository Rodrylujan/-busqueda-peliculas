import "../styles/CardPelicula.css";
import PropTypes from "prop-types";
import img from '../imagenes/default.png'

export const CardPelicula = ({ peliculaInfo }) => {
  return (
    <div className="contenedor-pelicula">
      <div className="card-pelicula">
        <img
          src={peliculaInfo.poster_path?`https://image.tmdb.org/t/p/w500${peliculaInfo.poster_path}`:img}
          alt={peliculaInfo.overview}
        />
        <div className="card-body">
          <p className="card-info-pelicula">{peliculaInfo.overview}</p>
          <p className="card-info-extra">
            release date: {peliculaInfo.release_date}
          </p>
          <p className="card-info-extra">
            Popularity: {peliculaInfo.popularity}
          </p>
        </div>
      </div>
      <h2>{peliculaInfo.title}</h2>
    </div>
  );
};

CardPelicula.propTypes = {
  peliculaInfo: PropTypes.shape({
    poster_path: PropTypes.string,
    overview: PropTypes.string.isRequired,
    original_language: PropTypes.string.isRequired,
    popularity: PropTypes.number.isRequired,
    release_date: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  }).isRequired,
};
