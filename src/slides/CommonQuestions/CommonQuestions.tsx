import {FC} from 'react';
import Heading from '../../components/Heading/Heading';

const CommonQuestions: FC = () => {
  return (
    <div>
      <Heading text="Common Questions Answered" size="h3" />
      <ul>
        <li className="mb-12">
          <div>
            <b className="text-gray-900">Q:</b> Why not just use inline styles? <code className="block text-tailwind-blue py-4">{'<a style="color: blue;">...</a>'}</code>
          </div>
          <div>
            <b className="text-gray-900">A:</b> <a href="https://tailwindcss.com/docs/theme" target="_blank" rel="noreferrer">Design system</a>, <a href="https://tailwindcss.com/docs/responsive-design" target="_blank" rel="noreferrer">responsive utilities</a>, and <a href="https://tailwindcss.com/docs/hover-focus-and-other-states" target="_blank" rel="noreferrer">state variants</a>
          </div>
        </li>
        <li>
          <div>
            <b className="text-gray-900">Q:</b> Won't it be hard to maintain repetitive combinations of utility classes? <code className="block text-tailwind-blue py-4">{'<button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">...</button>'}</code>
          </div>
          <div>
            <b className="text-gray-900">A:</b> <a href="https://tailwindcss.com/docs/extracting-components" target="_blank" rel="noreferrer">Extract components</a> or <a href="https://tailwindcss.com/docs/extracting-components#extracting-component-classes-with-apply" target="_blank" rel="noreferrer">use the <code>`@apply`</code> directive</a>
          </div>
        </li>
      </ul>
    </div>
  )
}

export default CommonQuestions;