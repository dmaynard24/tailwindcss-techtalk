import {FC, useState, useEffect} from 'react';
import {useHistory, useLocation} from 'react-router-dom';
import routes from '../../routes';
import ProgressBar from '../ProgressBar/ProgressBar';
import NavButton from '../NavButton/NavButton';

const Controls: FC = () => {
  const history = useHistory();
  const location = useLocation();

  const getInitialSlideNum = (): number => {
    const route = routes.find(r => r.path === location.pathname);
    if (route) {
      return route.id;
    } else {
      return 1;
    }
  }

  const [currentSlideNum, setCurrentSlideNum] = useState(getInitialSlideNum());

  useEffect(() => {
    history.push(routes[currentSlideNum - 1].path);
    // scroll back to top on slide change (pretty much only applies to mobile)
    window.scrollTo(0, 0);
  }, [history, currentSlideNum]);

  const isPrevDisabled = () => currentSlideNum === 1;
  const isNextDisabled = () => currentSlideNum === routes.length;

  const goToPrevSlide = () => {
    if (!isPrevDisabled()) {
      setCurrentSlideNum(currentSlideNum - 1);
    }
  }

  const goToNextSlide = () => {
    if (!isNextDisabled()) {
      setCurrentSlideNum(currentSlideNum + 1);
    }
  }

  document.onkeyup = (e: KeyboardEvent) => {
    if (e.key === 'ArrowLeft' || e.key === 'Backspace') {
      goToPrevSlide();
    } else if (e.key === 'ArrowRight' || e.key === ' ') {
      goToNextSlide();
    }
  }

  const getProgressWidthPercentage = () => `${Math.floor(currentSlideNum / routes.length * 100)}%`;

  return (
    <div>
      <ProgressBar width={getProgressWidthPercentage()} />
      <div className="fixed z-10 transform translate-x-1/2 bottom-4 right-1/2 flex p-2 rounded-md bg-white shadow-xl lg:transform-none lg:right-6 lg:shadow-none">
        <NavButton 
          srText="Go to Previous Slide" 
          pathD="M15 19l-7-7 7-7" 
          onClick={goToPrevSlide}
          className="mr-8"
          isDisabled={isPrevDisabled()} />
        <NavButton 
          srText="Go to Next Slide" 
          pathD="M9 5l7 7-7 7" 
          onClick={goToNextSlide}
          isDisabled={isNextDisabled()} />
      </div>
    </div>
  )
}

export default Controls;