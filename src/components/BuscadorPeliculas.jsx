import { useState } from "react";
import "../styles/BuscadorPeliculas.css";
import { CardPelicula } from "./CardPelicula";

// https://api.themoviedb.org/3/search/movie?query=Jack+Reacher&api_key=908f2ef4122ad4ea7246dac59d011b72
const URLBASE= 'https://api.themoviedb.org/3/search/movie?';
const KEY = '908f2ef4122ad4ea7246dac59d011b72'; 


export const BuscadorPeliculas = () => {
  const [namePelicula, setNamePelicula] = useState('');
  const [peliculas, setPeliculas] = useState([])

  const fechPeliculas = async()=>{
    try {
      const response = await fetch(`${URLBASE}query=${namePelicula}&api_key=${KEY}`);
      const data = await response.json();
      if(!response.ok){
        console.log("No se encontraron peliculas")
        return;
      }
      const {results} = data
      setPeliculas(results)
      console.log(results)
    } catch (error) {
      console.log(`Error: ${error}`)
    }
  }

  const serchMovie = (event)=>{
    event.preventDefault();
    if(!namePelicula) return;
    fechPeliculas();
  }

  const handleNameMovieChange = (event)=>{
    setNamePelicula(event.target.value);
  }
  return (
    <>
      <h1 className="titulo-pagina">Busqueda de peliculas online</h1>
      <form className="formulario-buscar" onSubmit={serchMovie}>
        <input value={namePelicula} type="text" placeholder="Ingrese el nombre de su pelicula" onChange={handleNameMovieChange} />
        <button className="buscar-pelicula" type="submit">Buscar</button>
      </form>
      <div className="contenedor-peliculas">
        {peliculas && (
          peliculas.map(pelicula => <CardPelicula key={pelicula.id} peliculaInfo={pelicula}></CardPelicula>)
        )}
      </div>
    </>
  );
};
