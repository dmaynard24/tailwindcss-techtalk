import {FC} from 'react';
import mark from '../../assets/icons/tailwind-mark.svg';

type Props = {
  text: string;
  size?: 'h2' | 'h3'
}

const Heading: FC<Props> = ({
  text,
  size
}) => {
  return (
    <div>
      {(!size || size === 'h2') && <h2>{text}</h2>}
      {size === 'h3' && <h3>{text}</h3>}
      <img src={mark} alt="TailwindCSS Logo Mark" className="w-12 mb-10 sm:mb-14" />
    </div>
  )
}

export default Heading;