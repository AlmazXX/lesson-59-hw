import { Component } from "react";
import JokeItem from "../../components/Joke/JokeItem";
import MovieForm from "../../components/MovieForm/MovieForm";
import MovieList from "../../components/MovieList/MovieList";
import { Joke, Movie } from "../../types";

const url = "https://v2.jokeapi.dev/joke/Programming";

interface State {
  movies: Movie[];
  joke: Joke;
}
class App extends Component<{}, State> {
  state = {
    movies: [],
    joke: {
      type: "",
      setup: "",
      delivery: "",
      joke: "",
      id: 0,
    },
  };

  addMovie = (newMovie: Movie) => {
    this.setState((prev) => ({ ...prev, movies: [...prev.movies, newMovie] }));
  };

  changeMovie = (id: string, newName: string) => {
    this.setState((prev) => ({
      ...prev,
      movies: prev.movies.map((movie) =>
        movie.id === id ? { ...movie, name: newName } : movie
      ),
    }));
  };

  deleteMovie = (id: string) => {
    this.setState((prev) => ({
      ...prev,
      movies: prev.movies.filter((movie) => movie.id !== id),
    }));
  };

  getJoke = async () => {
    const responce = await fetch(url);
    const joke = responce.ok ? await responce.json() : null;
    joke && this.setState((prev) => ({
      ...prev,
      joke: {
        ...prev.joke,
        type: joke.type,
        id: joke.id,
        setup: joke.type === "single" ? "" : joke.setup,
        delivery: joke.type === "single" ? "" : joke.delivery,
        joke: joke.type === "single" ? joke.joke : "",
      },
    }));
  };

  componentDidMount() {
    this.getJoke().catch((e) => console.error(e));
  }

  render() {
    return (
      <>
        <main className="container-fluid">
          <div className="row mt-2">
            <div className="col d-flex flex-column" style={{ gap: "16px" }}>
              <MovieForm onSubmit={this.addMovie} />
              <MovieList
                movies={this.state.movies}
                onChangeMovie={this.changeMovie}
                onDeleteMovie={this.deleteMovie}
              />
            </div>
            <div className="col">
              <JokeItem joke={this.state.joke} onJokeButton={this.getJoke} />
            </div>
          </div>
        </main>
      </>
    );
  }
}

export default App;