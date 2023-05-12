import { useState } from "react";
import {RiMovie2Fill} from "react-icons/ri"

const Movies = () => {
  const [movies, setMovies] = useState(['The Bad Guys', 'The Night House', 'Zootopia'])
  return (
    <>
      <div>
        <h3>Movies</h3>
        <div className="icon-container">
          {movies.map(movieTitle => 
            <div className="class-div" key={movieTitle}>
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