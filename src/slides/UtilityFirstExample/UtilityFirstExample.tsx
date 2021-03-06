import {FC} from 'react';
import Heading from '../../components/Heading/Heading';
import Card from '../../components/Card/Card';

const UtilityFirstExample: FC = () => {
  return (
    <div>
      <Heading text="Example for Comparison" size="h3" />
      <p className="max-w-2xl mb-8">Let's say you wanted to quickly build a "Card" component:</p>
      <Card />
    </div>
  )
}

export default UtilityFirstExample;