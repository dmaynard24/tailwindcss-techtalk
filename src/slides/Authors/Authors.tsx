import {FC} from 'react';
import Author from '../../components/Author/Author';
import Heading from '../../components/Heading/Heading';
import adam from '../../assets/adam.jpeg';
import steve from '../../assets/steve.jpg';
import jon from '../../assets/jon.jpg';
import david from '../../assets/david.jpeg';

const Authors: FC = () => {
  return (
    <div>
      <Heading text="Authors" />
      <div className="flex flex-row flex-wrap">
        <div className="w-full mb-6 md:w-1/2 md:pr-4 xl:w-1/4 xl:mb-0">
          <Author img={adam} name="Adam Wathan" twitterHandle="adamwathan" />
        </div>
        <div className="w-full mb-6 md:w-1/2 md:pr-4 xl:w-1/4 xl:mb-0">
          <Author img={steve} name="Steve Schoger" twitterHandle="steveschoger" />
        </div>
        <div className="w-full mb-6 md:w-1/2 md:pr-4 xl:w-1/4 xl:mb-0">
          <Author img={jon} name="Jonathan Reinink" twitterHandle="reinink" />
        </div>
        <div className="w-full mb-6 md:w-1/2 md:pr-4 xl:w-1/4 xl:mb-0">
          <Author img={david} name="David Hemphill" twitterHandle="davidhemphill" />
        </div>
      </div>
    </div>
  )
}

export default Authors;