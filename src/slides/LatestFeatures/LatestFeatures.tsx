import {FC} from 'react';
import Heading from '../../components/Heading/Heading';

const LatestFeatures: FC = () => {
  return (
    <div>
      <Heading text="Latest Features" />
      <p className="max-w-2xl mb-6">On November 18, 2020, Tailwind 2.0 was released with some major improvements. You may read a summary of the release notes in this <a href="https://blog.tailwindcss.com/tailwindcss-v2" target="_blank" rel="noreferrer">blog post</a> by Adam Wathan.</p>
      <ul className="list-disc pl-8">
        <li><a href="https://tailwindcss.com/docs/animation" target="_blank" rel="noreferrer">Animations</a></li>
        <li><a href="https://tailwindcss.com/docs/gradient-color-stops" target="_blank" rel="noreferrer">Gradients</a></li>
        <li><a href="https://tailwindcss.com/docs/presets" target="_blank" rel="noreferrer">Shareable Presets</a></li>
        <li><a href="https://tailwindcss.com/docs/dark-mode" target="_blank" rel="noreferrer">Dark Mode</a></li>
      </ul>
    </div>
  )
}

export default LatestFeatures;