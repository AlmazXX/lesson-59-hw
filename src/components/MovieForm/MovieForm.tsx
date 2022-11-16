import React from "react";

class MovieForm extends React.Component {
  render() {
    return (
      <form>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Movie name
          </label>
          <input type="text" className="form-control" id="name" />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    );
  }
}

export default MovieForm;
