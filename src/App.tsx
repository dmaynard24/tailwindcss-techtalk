import {useState} from 'react';
import './App.css';
import ProgressBar from './components/ProgressBar/ProgressBar';
import Controls from './components/Controls/Controls';
import One from './slides/1';
import Two from './slides/2';
import Three from './slides/3';

const App = () => {
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

  const getProgressWidthPercentage = () => `${currentSlideNum / slideCount * 100}%`;

  document.onkeyup = (e: KeyboardEvent) => {
    if (e.key === 'ArrowLeft' || e.key === 'Backspace') {
      goToPrevSlide();
    } else if (e.key === 'ArrowRight' || e.key === ' ') {
      goToNextSlide();
    }
  }

  return (
    <div className="min-h-screen flex items-center">
      <ProgressBar 
        width={getProgressWidthPercentage()} />

      <div className="relative z-1 w-full max-w-screen-lg xl:max-w-screen-xl mx-auto px-4">
        {currentSlideNum === 1 && <One />}
        {currentSlideNum === 2 && <Two />}
        {currentSlideNum === 3 && <Three />}
      </div>

      <Controls
        onClickPrev={goToPrevSlide}
        isPrevDisabled={isPrevDisabled()}
        onClickNext={goToNextSlide}
        isNextDisabled={isNextDisabled()} />
    </div>
  );
}

export default App;
