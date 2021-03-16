import {FC} from 'react';
import garden from '../../assets/garden.jpeg';

const ResponsiveCard: FC = () => {
  return (
    <div className="tailwind-card text-gray-900 border-gray-200 overflow-hidden border rounded-md w-80 max-w-full md:flex md:w-auto md:max-w-3xl md:items-center">
      <img src={garden} className="w-full md:w-1/2" alt="Chihuly Garden and Glass During the Day" />
      <div className="p-4 md:p-6">
        <h5 className="font-bold text-2xl mb-2">Chihuly Garden and Glass</h5>
        <p className="text-lg mb-4">Visit this exhibit in the Seattle Center showcasing the studio glass of Dale Chihuly.</p>
        <a href="https://www.chihulygardenandglass.com/about/dale-chihuly" target="_blank" rel="noreferrer" className="inline-block bg-blue-500 hover:bg-blue-700 text-white text-lg py-3 px-6 rounded-md">Book Now</a>
      </div>
    </div>
  )
};

export default ResponsiveCard;