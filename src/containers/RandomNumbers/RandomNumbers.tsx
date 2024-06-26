import {useState} from 'react';
import Ball from '../../components/Ball/Ball';

const RandomNumbers = () => {
  const [numbers, setNumbers] = useState<number[]>([5, 11, 16, 23, 32]);

  const generateRandomNumbers = (): void => {
    const arrayNumbers:number[] = [];
    while (arrayNumbers.length < numbers.length) {
      const number = Math.floor(Math.random() * (36 - 5 + 1)) + 5;
      if (!arrayNumbers.includes(number)) {
        arrayNumbers.push(number);
      }
    }
    arrayNumbers.sort((a, b) => a - b);
    setNumbers(arrayNumbers);
  };

  return (
    <div className="lotteries-container">
      <button onClick={generateRandomNumbers} className="lotteries-btn" type="button">New numbers</button>
      <div className="lotteries-balls-list">
        {numbers.map((number, index) => (
          <Ball key={index} number={number}/>
        ))}
      </div>
    </div>
  );
};

export default RandomNumbers;