import {FC} from 'react';
import './styles.css';

type Props = {
  img: string;
  name: string;
  className?: string;
  twitterHandle?: string;
}

const Author: FC<Props> = ({
  img,
  name,
  className,
  twitterHandle,
}) => {
  return (
    <div className={`${className} flex items-center justify-start`}>
      <div className="relative w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r from-cyan-300 to-tailwind-blue rounded-full mr-4">
        <img src={img} alt="Headshot of Dave Maynard" className="rounded-image absolute-center w-11 h-11 rounded-full border-white border-2 md:w-15 md:h-15 md:border-4" />
      </div>
      <div className="font-light leading-none">
        <div>
          <span className="sr-only">Author: </span>
          {name}
        </div>
       {twitterHandle && <a href={`https://twitter.com/${twitterHandle}`} target="_blank" rel="noreferrer" className="text-sm">@{twitterHandle}</a>}
      </div>
    </div>
  )
}

export default Author;