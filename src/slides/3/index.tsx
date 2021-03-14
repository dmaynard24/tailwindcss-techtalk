import {FC} from 'react';
import Author from '../../components/Author/Author';
import adam from '../../assets/adam.jpeg';
import steve from '../../assets/steve.jpg';
import jon from '../../assets/jon.jpg';
import david from '../../assets/david.jpeg';

const Three: FC = () => {
  return (
    <div>
      <h2>Authors</h2>
      <div className="flex flex-row flex-wrap">
        <div className="w-full md:w-1/2 xl:w-1/4">
          <Author img={adam} name="Adam Wathan" className="mb-6" twitterHandle="adamwathan" />
        </div>
        <div className="w-full md:w-1/2 xl:w-1/4">
          <Author img={steve} name="Steve Schoger" className="mb-6" twitterHandle="steveschoger" />
        </div>
        <div className="w-full md:w-1/2 xl:w-1/4">
          <Author img={jon} name="Jonathan Reinink" className="mb-6" twitterHandle="reinink" />
        </div>
        <div className="w-full md:w-1/2 xl:w-1/4">
          <Author img={david} name="David Hemphill" twitterHandle="davidhemphill" />
        </div>
      </div>
    </div>
  )
}

export default Three;