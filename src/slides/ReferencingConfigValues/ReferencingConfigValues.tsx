import {FC} from 'react';
import Heading from '../../components/Heading/Heading';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { materialLight } from 'react-syntax-highlighter/dist/esm/styles/prism';

const ReferencingConfigValues: FC = () => {
  const cssMarkup = `
  /* @media (min-width: 640px) */
  @media (min-width: theme(screens.sm)) {
    .rounded-image {
      width: 60px;
      height: 60px;
    }
  }
  `;
  const jsMarkup = `
  import resolveConfig from 'tailwindcss/resolveConfig'
  import tailwindConfig from './tailwind.config.js'

  const fullConfig = resolveConfig(tailwindConfig)

  fullConfig.theme.width[4]
  // '1rem'

  fullConfig.theme.screens.md
  // '768px'
  `;

  return (
    <div>
      <Heading text="Referencing Configuration Values" size="h3" />
      <p className="max-w-3xl mb-8">You can interpolate config values in your custom CSS for consistency.</p>
      <SyntaxHighlighter language="css" style={materialLight} wrapLongLines="true">{cssMarkup}</SyntaxHighlighter>
      <p className="max-w-3xl my-8">This is also <a href="https://tailwindcss.com/docs/configuration#referencing-in-java-script" target="_blank" rel="noreferrer">possible in JavaScript</a>.</p>
      <SyntaxHighlighter language="javascript" style={materialLight} wrapLongLines="true">{jsMarkup}</SyntaxHighlighter>
    </div>
  )
}

export default ReferencingConfigValues;