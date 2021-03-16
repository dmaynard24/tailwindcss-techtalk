import {FC} from 'react';
import Heading from '../../components/Heading/Heading';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { materialLight } from 'react-syntax-highlighter/dist/esm/styles/prism';

const Configurable: FC = () => {
  const markup = `
  // tailwind.config.js
  const colors = require('tailwindcss/colors')

  module.exports = {
    theme: {
      colors: {
        white: colors.white,
        gray: colors.gray,
        cyan: colors.cyan,
        blue: colors.blue,
      }
    }
  }
  `;

  return (
    <div>
      <Heading text="Configurable" size="h3" />
      <p className="max-w-3xl mb-8">In the same regard as responsive breakpoints, you may customize your project theme, colors, spacing, and variants by <a href="https://tailwindcss.com/docs/configuration" target="_blank" rel="noreferrer">updating the configuration</a>. Here's an example config importing four colors from Tailwind's curated palette.</p>
      <SyntaxHighlighter language="javascript" style={materialLight} wrapLongLines="true">{markup}</SyntaxHighlighter>
    </div>
  )
}

export default Configurable;