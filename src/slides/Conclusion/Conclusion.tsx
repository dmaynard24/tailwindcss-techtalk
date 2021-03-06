import {FC} from 'react';
import Heading from '../../components/Heading/Heading';

const Conclusion: FC = () => {
  return (
    <div>
      <Heading text="Conclusion & Final Takeaways" />
      <p className="max-w-4xl mb-6">
        Utility-first CSS frameworks like Tailwind are often a good fit for rapid prototypes or projects where components are not highly segmented with drastically differing styles.
      </p>
      <p className="max-w-4xl mb-6">
        Whether or not Tailwind is the right fit for a project, it teaches the value of enforced consistency in a <a href="https://tailwindcss.com/docs/theme#spacing" target="_blank" rel="noreferrer">design system</a> by keeping all property values on set scales. One of the biggest benefits of using small, composable utilities is that every developer on your team is always choosing values from a fixed set of options.
      </p>
      <p className="max-w-4xl mb-6">
        "Separation of concerns" still holds value in terms of readability and maintainability. But now with <a href="https://v3.vuejs.org/guide/single-file-component.html" target="_blank" rel="noreferrer">single-file components</a> in Vue or <a href="https://cssinjs.org" target="_blank" rel="noreferrer">CSS-in-JS</a> and <a href="https://reactjs.org/docs/introducing-jsx.html" target="_blank" rel="noreferrer">JSX</a> in React, there seems to be a clear trend towards mixing concerns when it comes to front-end technologies.
      </p>
    </div>
  )
}

export default Conclusion;