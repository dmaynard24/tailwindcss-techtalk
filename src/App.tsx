import {FC, useState} from 'react';
import './App.css';
import NavButton from './NavButton';
import One from './slides/1';

const App: FC<{}> = () => {
  const [currentSlideNum, setCurrentSlideNum] = useState(1);
  const slideCount = 10; // TODO: update

  const isPrevDisabled = () => currentSlideNum === 1;
  const isNextDisabled = () => currentSlideNum === slideCount;

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
    } else if (e.key === 'ArrowRight' || e.key === ' ' || e.key === 'Enter') {
      goToNextSlide();
    }
  }

  return (
    <div className="h-screen flex items-center">
      <div className="relative z-1 max-w-screen-lg xl:max-w-screen-xl mx-auto px-4 text-gray-900">
        {currentSlideNum === 1 && <One />}
      </div>
      <div className="controls">
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
  );
}

export default App;
