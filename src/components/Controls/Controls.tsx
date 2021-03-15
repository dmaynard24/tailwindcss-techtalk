import {FC} from 'react';
import NavButton from '../NavButton/NavButton';

type Props = {
  onClickPrev: any;
  isPrevDisabled: boolean;
  onClickNext: any;
  isNextDisabled: boolean;
};

const Controls: FC<Props> = ({
  onClickPrev,
  isPrevDisabled,
  onClickNext,
  isNextDisabled
}) => {
  return (
    <div className="fixed z-10 transform translate-x-1/2 bottom-4 right-1/2 flex p-2 rounded-md bg-white lg:transform-none lg:right-6">
      <NavButton 
        srText="Go to Previous Slide" 
        pathD="M15 19l-7-7 7-7" 
        onClick={() => onClickPrev()}
        className="mr-8"
        isDisabled={isPrevDisabled} />
      <NavButton 
        srText="Go to Next Slide" 
        pathD="M9 5l7 7-7 7" 
        onClick={() => onClickNext()}
        isDisabled={isNextDisabled} />
    </div>
  )
}

export default Controls;