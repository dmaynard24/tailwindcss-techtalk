import {FC} from 'react';
import logo from '../../assets/icons/tailwind-logo-type.svg';
import headshot from '../../assets/dave.jpg';
import Author from '../../components/Author/Author';

const One: FC = () => {
  return (
    <div>
      <img src={logo} alt="TailwindCSS Logo with Type" className="w-64" />
      <h1 className="mt-10 sm:mt-14">TailwindCSS: The Bootstrap of Tomorrow?</h1>
      <Author img={headshot} name="Dave Maynard" />
    </div>
  )
}

export default One;