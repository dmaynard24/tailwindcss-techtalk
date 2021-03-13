import {FC} from 'react';
import NavButton from '../NavButton/NavButton';
import './styles.css';

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
    <div className="controls">
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