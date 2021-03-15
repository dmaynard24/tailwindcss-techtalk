import {FC} from 'react';
import Heading from '../../components/Heading/Heading';

const Two: FC = () => {
  return (
    <div>
      <Heading text="Outline" />
      <ul className="list-disc pl-8">
        <li>Authors</li>
        <li>What is TailwindCSS?</li>
        <li>Latest Features</li>
        <li>Optimization</li>
        <li>Conclusion</li>
        <li>Demo</li>
      </ul>
    </div>
  )
}

export default Two;