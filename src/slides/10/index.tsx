import {FC} from 'react';
import Card from '../../components/Card/Card';
import Heading from '../../components/Heading/Heading';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { materialLight } from 'react-syntax-highlighter/dist/esm/styles/prism';
// import { materialDark } from 'react-syntax-highlighter/dist/esm/styles/prism';

const Ten: FC = () => {
  const markup = `
  <div class="card">
    <img src="../../assets/garden.jpeg" class="card-img-top" alt="Chihuly Garden and Glass During the Day" />
    <div class="card-body">
      <h5 class="card-title">Chihuly Garden and Glass</h5>
      <p class="card-text">Visit this exhibit in the Seattle Center showcasing the studio glass of Dale Chihuly.</p>
      <a href="https://www.chihulygardenandglass.com/about/dale-chihuly" class="btn btn-primary">Book Now</a>
    </div>
  </div>
  `

  return (
    <div>
      <Heading text="Bootstrap Approach" size="h3" />
      <div className="flex">
        <div className="hidden lg:block w-1/3 xl:w-1/4">
          <Card />
        </div>
        <div className="w-full lg:w-2/3 lg:pl-6 2xl:pl-0 xl:w-3/4">
          <SyntaxHighlighter language="html" style={materialLight} wrapLongLines="true">{markup}</SyntaxHighlighter>
        </div>
      </div>
    </div>
  )
}

export default Ten;