import {FC} from 'react';
import Author from '../../components/Author/Author';
import Heading from '../../components/Heading/Heading';
import adam from '../../assets/adam.jpeg';

const Four: FC = () => {
  return (
    <div>
      <Heading text="About Adam Wathan" />
      <Author img={adam} name="Adam Wathan" twitterHandle="adamwathan" />
      <p className="mt-6 max-w-xl">
        <a href="https://adamwathan.me/" target="_blank" rel="noreferrer">Adam</a> is a full-stack developer and entrepreneur who released <a href="https://adamwathan.me/the-book-launch-that-let-me-quit-my-job/" target="_blank" rel="noreferrer">his first book</a> in 2016 and left his job to pursue open source development full-time.
      </p>
    </div>
  )
}

export default Four;