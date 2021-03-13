import React from 'react';
import logo from './tailwind-logo-type.svg';

const One: React.FC<{}> = () => {
  return (
    <div>
      <img src={logo} className="w-64" alt="TailwindCSS Logo with Type" />
      <h1 className="text-4xl sm:text-6xl lg:text-7xl leading-none font-extrabold tracking-tight mt-10 mb-8 sm:mt-14 sm:mb-10">TailwindCSS: The Bootstrap of Tomorrow?</h1>
      <p className="text-gray-500 max-w-screen-lg text-lg sm:text-2xl sm:leading-10 font-medium mb-10 sm:mb-11">A tech talk by Dave Maynard</p>
    </div>
  )
}

export default One;