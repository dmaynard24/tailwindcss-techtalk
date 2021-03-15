import {FC} from 'react';
import Heading from '../../components/Heading/Heading';
import book from '../../assets/book-cover-sm.png';
import './styles.css';

const Six: FC = () => {
  return (
    <div>
      <Heading text="Refactoring UI" />
      <div className="flex flex-wrap items-start justify-start">
        <div className="w-full lg:w-auto">
          <p className="mb-6 max-w-xl">In 2018, Adam Wathan and Steve Schoger co-authored and released <a href="https://refactoringui.com/book/" target="_blank" rel="noreferrer">this book</a> to teach design principles using specific tactics explained from a developer's point-of-view.</p>
          <p className="mb-6 max-w-xl lg:mb-0">It's already sold over 10,000 copies to developers and designers all around the world.</p>
        </div>
        <div className="w-full lg:w-1/4">
          <img src={book} alt="Refactoring UI Book Cover" className="book-cover" />
        </div>
      </div>
    </div>
  )
}

export default Six;