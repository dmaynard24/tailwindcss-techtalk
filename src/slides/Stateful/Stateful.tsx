import {FC} from 'react';
import Heading from '../../components/Heading/Heading';
import Demo from '../../components/Demo/Demo';

const Stateful: FC = () => {
  const markup = `
  <button class="bg-cyan-500 hover:bg-cyan-700 ...">
    Hover Me
  </button>
  `;

  return (
    <div>
      <Heading text="Stateful" size="h3" />
      <p className="max-w-3xl mb-8">Tailwind allows you to style elements on hover, focus, and more by prefixing utilities with the appropriate <a href="https://tailwindcss.com/docs/hover-focus-and-other-states" target="_blank" rel="noreferrer">state variant</a>. I think of state variants as a superset of CSS pseudo-classes.</p>
      <Demo bgColor="cyan" language="html" markup={markup}>
        <button className="bg-cyan-500 hover:bg-cyan-700 text-white font-bold uppercase tracking-widest text-sm py-3 px-5 rounded-md">Book Now</button>
      </Demo>
    </div>
  )
}

export default Stateful;