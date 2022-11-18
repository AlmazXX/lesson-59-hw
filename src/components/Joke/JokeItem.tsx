import React, { useEffect } from "react";
import { Joke } from "../../types";

interface Props {
  joke: Joke;
  onJokeButton: React.MouseEventHandler;
}

const JokeItem: React.FC<Props> = ({ joke, onJokeButton }) => {
  let jokeSet = <p>Click the Joke for bad joke</p>;

  if (joke.type === "single") {
    jokeSet = (
      <p className="bg-primary rounded-3 p-3 text-white">{joke.joke}</p>
    );
  }

  if (joke.type === "twopart") {
    jokeSet = (
      <div>
        <p className="bg-info rounded-3 p-3 text-white">- {joke.setup}</p>
        <p className="bg-warning rounded-3 p-3 text-white">- {joke.delivery}</p>
      </div>
    );
  }

  return (
    <React.Fragment>
      <button className="btn btn-primary mb-3" onClick={onJokeButton}>
        Joke
      </button>
      {jokeSet}
    </React.Fragment>
  );
};

export default JokeItem;