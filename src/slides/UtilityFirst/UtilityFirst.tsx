import {FC} from 'react';
import Heading from '../../components/Heading/Heading';

const UtilityFirst: FC = () => {
  return (
    <div>
      <Heading text="Utility-First" size="h3" />
      <p className="max-w-xl mb-6">Unlike many other CSS frameworks that provided UI kits or component libraries, Tailwind began as an API for design systems.</p>
      <p className="max-w-xl">It provides a large number of expressive CSS classes that each apply a single style to an element and, when used in combination, can completely style elements without ever leaving your HTML.</p>
    </div>
  )
}

export default UtilityFirst;