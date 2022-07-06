import { useEffect, useState } from "react";
//import { useEffect } from "react/cjs/react.production.min";
import Seo from "../Components/Seo";

const API_KEY = "f672361f3090133b19a5dedad76f43a7";

export default function Home() {
  const [movies, setMovies] = useState();
  useEffect(() => {
    // IIFE 익명함수 선언시 끝에 ()를 붙여 함수를 실행시켜줘야 한다 (노션에 적어놓고 기억도 못하네)
    (async() => {
      const {results} = await (
        await fetch(
        `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`
      )).json();
      setMovies(results);
      console.log(results)
    })();
  }, [])

  
  return (
    <div className="container">
      <Seo />
      {!movies && <h4>Loading...</h4>}
      {movies?.map((movie) => (
        <div className="movie" key={movie.id}>
          <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} />
          <h4>{movie.original_title}</h4>
        </div>
      ))}
      <style jsx>{`
        .container {
          display: grid;
          grid-template-columns: 1fr 1fr;
          padding: 20px;
          gap: 20px;
        }
        .movie img {
          max-width: 100%;
          border-radius: 12px;
          transition: transform 0.2s ease-in-out;
          box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
        }
        .movie:hover img {
          transform: scale(1.05) translateY(-10px);
        }
        .movie h4 {
          font-size: 18px;
          text-align: center;
        }
      `}</style>
    </div>
  )
}