import {FC} from 'react';

type Props = {
  srText: string;
  pathD: string;
  onClick: any;
  className?: string;
  isDisabled?: boolean;
}

const NavButton: FC<Props> = ({
  srText,
  pathD,
  onClick,
  className,
  isDisabled
}) => {
  return (
    <button className={`text-gray-400 hover:text-gray-900 disabled:opacity-60 disabled:pointer-events-none w-10 h-10 relative ${className}`} onClick={onClick} disabled={isDisabled}>
      <span className="sr-only">{srText}</span>
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" className="w-6 h-6 absolute-center" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={pathD} />
      </svg>
    </button>
  )
}

export default NavButton;