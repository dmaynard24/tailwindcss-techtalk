import {FC} from 'react';
import Heading from '../../components/Heading/Heading';
import Card from '../../components/Card/Card';
import './styles.css';

const Nine: FC = () => {
  return (
    <div>
      <Heading text="Example for Comparison" size="h3" />
      <p className="max-w-xl mb-8">Let's say you wanted to quickly build a "Card" component:</p>
      <Card />
    </div>
  )
}

export default Nine;