import {FC} from 'react';
import Heading from '../../components/Heading/Heading';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { materialLight } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { materialDark } from 'react-syntax-highlighter/dist/esm/styles/prism';

const Eleven: FC = () => {
  const markup = `
  <div class="text-gray-900 border-gray-200 border rounded-md w-80">
    <img src="../../assets/garden.jpeg" class="w-full rounded-t-md" alt="Chihuly Garden and Glass During the Day" />
    <div class="p-4">
      <h5 class="font-bold text-3xl mb-2">Chihuly Garden and Glass</h5>
      <p class="text-lg mb-4">Visit this exhibit in the Seattle Center showcasing the studio glass of Dale Chihuly.</p>
      <a href="https://www.chihulygardenandglass.com/about/dale-chihuly" class="inline-block bg-blue-500 hover:bg-blue-700 text-white text-lg py-3 px-6 rounded-md">Book Now</a>
    </div>
  </div>
  `

  return (
    <div>
      <Heading text="Tailwind Approach" />
      <SyntaxHighlighter language="html" style={materialLight} wrapLongLines="true">{markup}</SyntaxHighlighter>
    </div>
  )
}

export default Eleven;