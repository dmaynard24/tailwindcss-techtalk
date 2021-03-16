import { FC } from "react";
import Heading from "../../components/Heading/Heading";
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { materialLight } from 'react-syntax-highlighter/dist/esm/styles/prism';

const CustomBreakpoints: FC = () => {
  const markup = `
  // tailwind.config.js
  module.exports = {
    theme: {
      screens: {
        'sm': '576px', // @media (min-width: 576px) { ... }
        'md': '768px', // @media (min-width: 768px) { ... }
        'lg': '992px', // @media (min-width: 992px) { ... }
        'xl': '1200px', // @media (min-width: 1200px) { ... }
      }
    }
  }
  `;

  return (
    <div>
      <Heading text="Configuring Responsive Breakpoints" size="h3" />
      <p className="max-w-2xl mb-8">
        Tailwind's <a href="https://tailwindcss.com/docs/configuration" target="_blank" rel="noreferrer">config options</a> allow you to take control of exactly what utility classes will be generated at build time. Here's how you could customize the responsive breakpoints to mirror the <a href="https://getbootstrap.com/docs/4.0/layout/grid/#grid-options" target="_blank" rel="noreferrer">Bootstrap grid</a>. 
      </p>
      <SyntaxHighlighter language="javascript" style={materialLight} wrapLongLines="true">{markup}</SyntaxHighlighter>
    </div>
  );
};

export default CustomBreakpoints;
