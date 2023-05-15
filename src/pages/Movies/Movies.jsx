import { useState, useEffect } from "react";
import {RiMovie2Fill} from "react-icons/ri"
import { getMovies } from "../../services/api-calls"; 


const Movies = () => {
  const [movies, setMovies] = useState([])

  useEffect(()=> {
    const fetchMovies = async () => {
      const classData = await getMovies()
      setMovies(classData.results)
    }
    fetchMovies()
  }, [])

  return (
    <>
      <div>
        <h3>Movies</h3>
        <div className="icon-container">
          {movies.map(movieTitle => 
            <div className="class-div" key={movieTitle.index}>
              <RiMovie2Fill style={{width:"20px", height:"20px"}}/>
              {movieTitle}
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default Movies;