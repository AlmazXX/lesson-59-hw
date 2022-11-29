import React from "react";
import { Movie } from "../../types";

interface Props {
  movie: Movie;
  onInputChange: (id: string, newName: string) => void;
  onButtonClick: React.MouseEventHandler;
}

class MovieItem extends React.Component<Props> {
  shouldComponentUpdate(nextProps: Readonly<Props>): boolean {
    return nextProps.movie.name !== this.props.movie.name;
  }

  render() {
    return (
      <label
        className={"d-flex"}
        style={{ gap: "16px" }}
        htmlFor={this.props.movie.id}
      >
        <input
          className="form-control"
          type="text"
          value={this.props.movie.name}
          id={this.props.movie.id}
          onChange={(e) => {
            this.props.onInputChange(this.props.movie.id, e.target.value);
          }}
        />
        <button className="btn btn-primary" onClick={this.props.onButtonClick}>
          X
        </button>
      </label>
    );
  }
}

export default MovieItem;