import {FC} from 'react';
import Heading from '../../components/Heading/Heading';

const Seven: FC = () => {
  return (
    <div>
      <Heading text="TailwindCSS" />
      <p className="mb-6">A CSS framework for rapidly building custom user interfaces.</p>
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