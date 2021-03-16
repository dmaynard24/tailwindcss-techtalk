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

const routes = [
  {id: 1, path: '/', component: <TitleScreen />},
  {id: 2, path: '/outline', component: <Outline />},
  {id: 3, path: '/authors', component: <Authors />},
  {id: 4, path: '/adam-wathan', component: <AdamWathan />},
  {id: 5, path: '/steve-schoger', component: <SteveSchoger />},
  {id: 6, path: '/refactoring-ui', component: <RefactoringUI />},
  {id: 7, path: '/what-is-tailwind', component: <WhatIsTailwind />},
  {id: 8, path: '/utility-first', component: <UtilityFirst />},
  {id: 9, path: '/utility-first-example', component: <UtilityFirstExample />},
  {id: 10, path: '/bootstrap-approach', component: <BootstrapApproach />},
  {id: 11, path: '/tailwind-approach', component: <TailwindApproach />},
  {id: 12, path: '/utility-vs-component', component: <UtilityVsComponent />},
  {id: 13, path: '/responsive', component: <Responsive />},
  {id: 14, path: '/responsive-example', component: <ResponsiveExample />},
  {id: 15, path: '/custom-breakpoints', component: <CustomBreakpoints />},
  {id: 16, path: '/stateful', component: <Stateful />},
  {id: 17, path: '/configurable', component: <Configurable />},
  {id: 18, path: '/referencing-config-values', component: <ReferencingConfigValues />},
  {id: 19, path: '/common-questions', component: <CommonQuestions />},
];

export default routes;