import {FC} from 'react';
import mark from '../../assets/icons/tailwind-mark.svg';

type Props = {
  text: string;
}

const Heading: FC<Props> = ({
  text
}) => {
  return (
    <div>
      <h2>{text}</h2>
      <img src={mark} alt="TailwindCSS Logo Mark" className="w-12 mb-10 sm:mb-14" />
    </div>
  )
}

export default Heading;