import { FC } from "react";
import Heading from "../../components/Heading/Heading";
import ResponsiveCard from "../../components/ResponsiveCard/ResponsiveCard";
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { materialLight } from 'react-syntax-highlighter/dist/esm/styles/prism';

const ResponsiveExample: FC = () => {
  const markup = `
  <div class="text-gray-900 border-gray-200 overflow-hidden border rounded-md w-80 max-w-full md:flex md:w-auto md:max-w-3xl md:items-center">
    <img src="../../assets/garden.jpeg" class="w-full md:w-1/2" alt="Chihuly Garden and Glass During the Day" />
    <div class="p-4 md:p-6">
      <h5 class="font-bold text-2xl mb-2">Chihuly Garden and Glass</h5>
      <p class="text-lg mb-4">Visit this exhibit in the Seattle Center showcasing the studio glass of Dale Chihuly.</p>
      <a href="https://www.chihulygardenandglass.com/about/dale-chihuly" target="_blank" rel="noreferrer" class="inline-block bg-blue-500 hover:bg-blue-700 text-white text-lg py-3 px-6 rounded-md">Book Now</a>
    </div>
  </div>
  `;

  return (
    <div>
      <Heading text="Responsive Card Component" size="h3" />
      <p className="max-w-2xl mb-8">
        By adding a few additional classes with the responsive prefix{" "}
        <code className="text-tailwind-blue">`md:`</code>, the Card now adapts
        different viewport sizes. Resize to see the difference!
      </p>
      <div className="mb-8">
        <SyntaxHighlighter language="html" style={materialLight} wrapLongLines="true">{markup}</SyntaxHighlighter>
      </div>
      <ResponsiveCard />
    </div>
  );
};

export default ResponsiveExample;
