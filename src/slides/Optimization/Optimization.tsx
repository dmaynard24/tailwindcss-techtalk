import {FC} from 'react';
import Heading from '../../components/Heading/Heading';

const Optimization: FC = () => {
  return (
    <div>
      <Heading text="Optimization" />
      <p className="max-w-2xl mb-6">One of the major concerns of using a utility-first framework is how it generates a massive number of combinations of <code className="text-tailwind-blue">`${'{'}variant{'}'}:${'{'}property{'}'}-${'{'}value{'}'}`</code> CSS classes which leads to extremely large stylesheet file sizes.</p>
      <p className="max-w-2xl">Tailwind addressed this issue by implementing a purge option that uses <a href="https://purgecss.com/" target="_blank" rel="noreferrer">PurgeCSS</a> under the hood to tree-shake unused styles and <a href="https://tailwindcss.com/docs/optimizing-for-production" target="_blank" rel="noreferrer">optimize your final build size</a>.</p>
    </div>
  )
}

export default Optimization;