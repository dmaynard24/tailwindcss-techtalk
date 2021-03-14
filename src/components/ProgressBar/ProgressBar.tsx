import {FC} from 'react';

type Props = {
  width: string
};

const ProgressBar: FC<Props> = ({
  width
}) => {
  return (
    <div className="fixed top-0 left-0 h-1 bg-gradient-to-r from-cyan-300 to-tailwind-blue duration-200 transition-all" style={{width}}></div>
  )
}

export default ProgressBar;