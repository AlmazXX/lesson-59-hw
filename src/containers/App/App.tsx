import React, { useEffect, useState } from "react";
import JokeItem from "../../components/Joke/JokeItem";
import MovieForm from "../../components/MovieForm/MovieForm";
import MovieList from "../../components/MovieList/MovieList";
import { Movie, Joke } from "../../types";

const url = "https://v2.jokeapi.dev/joke/Programming";

function App() {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [joke, setJoke] = useState<Joke>({
    type: "",
    setup: "",
    delivery: "",
    joke: "",
    id: 0,
  });

  const addMovie = (newMovie: Movie) => {
    setMovies((prev) => [...prev, newMovie]);
  };

  const changeMovie = (id: string, newName: string) => {
    setMovies((prev) =>
      prev.map((movie) =>
        movie.id === id ? { ...movie, name: newName } : movie
      )
    );
  };

  const deleteMovie = (id: string) => {
    setMovies((prev) => prev.filter((movie) => movie.id !== id));
  };

  const getJoke = async () => {
    const responce = await fetch(url);
    const joke = responce.ok ? await responce.json() : responce.status;
    setJoke((prev) => ({
      ...prev,
      type: joke.type,
      id: joke.id,
      setup: joke.type === "single" ? "" : joke.setup,
      delivery: joke.type === "single" ? "" : joke.delivery,
      joke: joke.type === "single" ? joke.joke : "",
    }));
  };

  useEffect(() => {
    getJoke().catch((e) => console.error(e));
  }, []);

  return (
    <React.Fragment>
      <main className="container-fluid">
        <div className="row mt-2">
          <div className="col d-flex flex-column" style={{ gap: "16px" }}>
            <MovieForm onSubmit={addMovie} />
            <MovieList
              movies={movies}
              onChangeMovie={changeMovie}
              onDeleteMovie={deleteMovie}
            />
          </div>
          <div className="col">
            <JokeItem joke={joke} onJokeButton={getJoke} />
          </div>
        </div>
      </main>
    </React.Fragment>
  );
}

export default App;