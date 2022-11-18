import React from "react";
import { Movie, MovieMutation } from "../../types";

interface State {
  movie: MovieMutation;
}

interface Props {
  onSubmit: (movie: Movie) => void;
}
class MovieForm extends React.Component<Props, State> {
  state = {
    movie: { name: ""},
  };

  onFormChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const {name, value} = e.target;
    this.setState(prev => {
      return {
        ...prev,
        movie: {...prev.movie, [name]: value}
      }
    });
  }

  onFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    this.props.onSubmit({
      id: (Math.random() + Math.random()).toString(),
      ...this.state.movie
    })
    this.setState(prev => ({...prev, movie: {name: ''}}))
  }

  render() {
    return (
      <form onSubmit={this.onFormSubmit}>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Movie name
          </label>
          <input type="text" className="form-control" id="name" name="name" value={this.state.movie.name} onChange={this.onFormChange} />
        </div>
        <button type="submit" className="btn btn-primary">
          Add
        </button>
      </form>
    );
  }
}

export default MovieForm;