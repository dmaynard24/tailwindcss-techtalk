import {FC} from 'react';
import garden from '../../assets/garden.jpeg';

const Card: FC = () => {
  return (
    <div className="tailwind-card text-gray-900 border-gray-200 border rounded-md w-80 max-w-full">
      <img src={garden} className="w-full rounded-t-md" alt="Chihuly Garden and Glass During the Day" />
      <div className="p-4">
        <h5 className="font-bold text-2xl mb-2">Chihuly Garden and Glass</h5>
        <p className="text-lg mb-4">Visit this exhibit in the Seattle Center showcasing the studio glass of Dale Chihuly.</p>
        <a href="https://www.chihulygardenandglass.com/about/dale-chihuly" target="_blank" rel="noreferrer" className="inline-block bg-blue-500 hover:bg-blue-700 text-white text-lg py-3 px-6 rounded-md">Book Now</a>
      </div>
    </div>
  )
};

export default Card;