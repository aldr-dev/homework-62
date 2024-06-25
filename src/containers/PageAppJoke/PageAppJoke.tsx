import * as React from 'react';
import {useEffect, useState} from 'react';
import './PageAppJoke.css';

const url = 'https://v2.jokeapi.dev/joke/Programming';

export interface Props {
  type: string;
  setup: string;
  delivery: string;
  joke: string;
}

const PageAppJoke = () => {
  const [joke, setJoke] = useState<Props>({
    type: '',
    setup: '',
    delivery: '',
    joke: '',
  });

  const [error, setError] = useState(false);

  useEffect(() => {
    void fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error('Request failed with status ' + response.status);
      } else {
        const dataObject = await response.json();
        const {type, setup, delivery, joke} = dataObject;
        setJoke((prevState) => {
          return {
            ...prevState,
            type,
            setup,
            delivery,
            joke,
          };
        });
      }
    } catch (error) {
      console.error(error);
      setError(true);
    }
  };

  return (
    <>
      <div className="joke-container-inner">
        <p className="pt-3">{joke.type ? 'Joke for:' : null} {joke.type}</p>
        <p>{joke.setup ? '- John Doe say:' : null} {joke.setup}</p>
        <p>{joke.delivery ? '- John Doe say:' : null} {joke.delivery}</p>
        <p>{joke.joke}</p>
      </div>
      <button className="btn btn-success" type="button" onClick={fetchData}>New joke</button>
      {error ? (<div className="error-message">Failed to fetch joke. Please try again later.</div>) : null}
    </>
  );
};

export default PageAppJoke;