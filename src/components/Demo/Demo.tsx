import React from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { materialLight } from 'react-syntax-highlighter/dist/esm/styles/prism';
import './Demo.css';

type Props = {
  markup: string;
  language: string;
};

const Demo: React.FC<Props> = ({
  children,
  language,
  markup
}) => {
  return (
    <div className="demo-component">
      <div className={`flex items-center justify-center p-6 bg-cyan-100 rounded-t-md`}>
        {children}
      </div>
      <SyntaxHighlighter language={language} style={materialLight} wrapLongLines="true">{markup}</SyntaxHighlighter>
    </div>
  )
}

export default Demo;