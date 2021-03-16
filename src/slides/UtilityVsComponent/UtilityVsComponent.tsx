import { FC } from "react";
import Heading from "../../components/Heading/Heading";

const UtilityVsComponent: FC = () => {
  return (
    <div>
      <Heading text="Utility-First vs. Component-Based" size="h3" />
      <p className="max-w-2xl mb-8">
        <a href="https://envylabs.com/insights/weighing-the-advantages-of-component-based-and-atomic-css-approaches/" target="_blank" rel="noreferrer">This article</a> by Ben Stankich dives deep into the comparison of these two styling methodologies.
      </p>
      <table className="text-sm text-left md:text-lg 2xl:text-2xl">
        <thead>
          <tr className="border-b border-gray-200">
            <th className="pr-2 pb-2 align-bottom font-extrabold text-gray-900 xl:pr-8 2xl:pr-2 2xl:py-4">Utility-First</th>
            <th className="px-2 pb-2 align-bottom font-extrabold text-gray-900 border-l border-l-gray-200 xl:px-8 2xl:px-4 2xl:py-4">Component-Based</th>
          </tr>
        </thead>
        <tbody>
          <tr className="border-b border-gray-200">
            <td className="pr-2 py-2 align-top xl:pr-8 2xl:pr-2 2xl:py-4">Not as common of a pattern (TailwindCSS and <a href="http://tachyons.io/" target="_blank" rel="noreferrer">Tachyons</a>)</td>
            <td className="px-2 py-2 align-top border-l border-l-gray-200 xl:px-8 2xl:px-4 2xl:py-4">A tried and true strategy for writing CSS (<a href="https://getbootstrap.com/" target="_blank" rel="noreferrer">Bootstrap</a>, <a href="https://bulma.io/" target="_blank" rel="noreferrer">Bulma</a>, <a href="https://get.foundation/sites" target="_blank" rel="noreferrer">Foundation</a>, and <a href="https://materializecss.com/" target="_blank" rel="noreferrer">Materialize</a>)</td>
          </tr>
          <tr className="border-b border-gray-200">
            <td className="pr-2 py-2 align-top xl:pr-8 2xl:pr-2 2xl:py-4">HTML littered with CSS classes can be lengthy and hard to scan, DOM takes longer to load</td>
            <td className="px-2 py-2 align-top border-l border-l-gray-200 xl:px-8 2xl:px-4 2xl:py-4">CSS can become lengthy and hard to quickly scan, stylesheets take longer to load</td>
          </tr>
          <tr className="border-b border-gray-200">
            <td className="pr-2 py-2 align-top xl:pr-8 2xl:pr-2 2xl:py-4">Component instance styles can be easily tweaked to fit any context</td>
            <td className="px-2 py-2 align-top border-l border-l-gray-200 xl:px-8 2xl:px-4 2xl:py-4">Component instance styles are generally harder to tweak without creating a variation</td>
          </tr>
          <tr className="border-b border-gray-200">
            <td className="pr-2 py-2 align-top xl:pr-8 2xl:pr-2 2xl:py-4">Property values are limited to a system, allowing for more cascading styles and likely less "one-off" styles</td>
            <td className="px-2 py-2 align-top border-l border-l-gray-200 xl:px-8 2xl:px-4 2xl:py-4">More likely to have "one-off" styles because property values aren't limited to a system</td>
          </tr>
          <tr>
            <td className="pr-2 py-2 align-top xl:pr-8 2xl:pr-2 2xl:py-4">Typically less variation of units when enforcing the design system with a set of reused classes</td>
            <td className="px-2 py-2 align-top border-l border-l-gray-200 xl:px-8 2xl:px-4 2xl:py-4">Potentially more variation of units and property values unless classes are reused or extended with a preprocessor</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default UtilityVsComponent;
