import {FC} from 'react';
import Heading from '../../components/Heading/Heading';

const Seven: FC = () => {
  return (
    <div>
      <Heading text="TailwindCSS" />
      <p className="mb-6 max-w-xl">A CSS framework for rapidly building custom user interfaces. It has come a long way since the <a href="http://web.archive.org/web/20180228140148if_/https://tailwindcss.com/docs/what-is-tailwind/" target="_blank" rel="noreferrer">beta version</a> in early 2018.</p>
      <ul className="list-disc pl-8">
        <li>Utility-First</li>
        <li>Responsive</li>
        <li>Stateful</li>
        <li>Customizable</li>
      </ul>
    </div>
  )
}

export default Seven;