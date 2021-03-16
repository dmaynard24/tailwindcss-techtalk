import {useState, useEffect} from 'react';
import './App.css';

import ProgressBar from './components/ProgressBar/ProgressBar';
import Controls from './components/Controls/Controls';

import TitleScreen from './slides/TitleScreen/TitleScreen';
import Outline from './slides/Outline/Outline';
import Authors from './slides/Authors/Authors';
import AdamWathan from './slides/AdamWathan/AdamWathan';
import SteveSchoger from './slides/SteveSchoger/SteveSchoger';
import RefactoringUI from './slides/RefactoringUI/RefactoringUI';
import WhatIsTailwind from './slides/WhatIsTailwind/WhatIsTailwind';
import UtilityFirst from './slides/UtilityFirst/UtilityFirst';
import UtilityFirstExample from './slides/UtilityFirstExample/UtilityFirstExample';
import BootstrapApproach from './slides/BootstrapApproach/BootstrapApproach';
import TailwindApproach from './slides/TailwindApproach/TailwindApproach';
import Responsive from './slides/Responsive/Responsive';
import UtilityVsComponent from './slides/UtilityVsComponent/UtilityVsComponent';
import CommonQuestions from './slides/CommonQuestions/CommonQuestions';
import ResponsiveExample from './slides/ResponsiveExample/ResponsiveExample';
import CustomBreakpoints from './slides/CustomBreakpoints/CustomBreakpoints';
import Stateful from './slides/Stateful/Stateful';
import Configurable from './slides/Configurable/Configurable';
import ReferencingConfigValues from './slides/ReferencingConfigValues/ReferencingConfigValues';

const App = () => {
  const [currentSlideNum, setCurrentSlideNum] = useState(1);
  const slideCount = 19; // TODO: update

  useEffect(() => {
    // scroll back to top on slide change (pretty much only applies to mobile)
    window.scrollTo(0, 0);
  }, [currentSlideNum]);

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

  const getProgressWidthPercentage = () => `${Math.floor(currentSlideNum / slideCount * 100)}%`;

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

      <div className="container mx-auto py-24 px-4">
        {currentSlideNum === 1 && <TitleScreen />}
        {currentSlideNum === 2 && <Outline />}
        {currentSlideNum === 3 && <Authors />}
        {currentSlideNum === 4 && <AdamWathan />}
        {currentSlideNum === 5 && <SteveSchoger />}
        {currentSlideNum === 6 && <RefactoringUI />}
        {currentSlideNum === 7 && <WhatIsTailwind />}
        {currentSlideNum === 8 && <UtilityFirst />}
        {currentSlideNum === 9 && <UtilityFirstExample />}
        {currentSlideNum === 10 && <BootstrapApproach />}
        {currentSlideNum === 11 && <TailwindApproach />}
        {currentSlideNum === 12 && <UtilityVsComponent />}
        {currentSlideNum === 13 && <Responsive />}
        {currentSlideNum === 14 && <ResponsiveExample />}
        {currentSlideNum === 15 && <CustomBreakpoints />}
        {currentSlideNum === 16 && <Stateful />}
        {currentSlideNum === 17 && <Configurable />}
        {currentSlideNum === 18 && <ReferencingConfigValues />}
        {currentSlideNum === 19 && <CommonQuestions />}
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
