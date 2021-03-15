import {FC} from 'react';
import Author from '../../components/Author/Author';
import Heading from '../../components/Heading/Heading';
import steve from '../../assets/steve.jpg';

const Five: FC = () => {
  return (
    <div>
      <Heading text="About Steve Schoger" size="h3" />
      <Author img={steve} name="Steve Schoger" twitterHandle="steveschoger" />
      <p className="mt-6 max-w-xl"><a href="https://www.steveschoger.com/" target="_blank" rel="noreferrer">Steve</a> is a visual designer who created a couple icon sets (including <a href="https://heroicons.com/" target="_blank" rel="noreferrer">Heroicons</a>) and co-authored a book with Adam Wathan.</p>
    </div>
  )
}

export default Five;