import React from "react";
import MovieItem from "./MovieItem";
import { Movie } from "../../types";

interface Props {
  movies: Movie[];
  onChangeMovie: (id: string, newName: string) => void;
  onDeleteMovie: (id: string) => void;
}
class MovieList extends React.Component<Props> {
  render() {
    return (
      <div className="list-group" style={{ gap: "16px" }}>
        {this.props.movies.map((movie) => (
          <MovieItem
            key={movie.id}
            movie={movie}
            onInputChange={this.props.onChangeMovie}
            onButtonClick={() => this.props.onDeleteMovie(movie.id)}
          />
        ))}
      </div>
    );
  }
}

export default MovieList;