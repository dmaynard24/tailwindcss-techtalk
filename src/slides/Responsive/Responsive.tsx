import { FC } from "react";
import Heading from "../../components/Heading/Heading";

const Responsive: FC = () => {
  return (
    <div>
      <Heading text="Responsive" size="h3" />
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/3">
          <p className="max-w-2xl mb-8 lg:mb-0">
            Every utility class in Tailwind can be applied conditionally at different breakpoints. Here are the five default breakpoints, inspired by common device resolutions.
          </p>
        </div>
        <div className="w-full lg:w-2/3 lg:pl-8">
          <table className="text-sm text-left md:text-lg 2xl:text-2xl">
            <thead>
              <tr className="border-b border-gray-200">
                <th className="pr-2 pb-2 align-bottom font-extrabold text-gray-900 xl:pr-8 2xl:pr-2 2xl:pb-4">Breakpoint prefix</th>
                <th className="pr-2 pb-2 align-bottom font-extrabold text-gray-900 xl:pr-8 2xl:pr-2 2xl:pb-4">Minimum width</th>
                <th className="pr-2 pb-2 align-bottom font-extrabold text-gray-900 xl:pr-8 2xl:pr-2 2xl:pb-4">CSS</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-gray-200">
                <td className="pr-2 py-2 align-top xl:pr-8 2xl:pr-2 2xl:py-4">
                  <code className="text-tailwind-blue">sm</code>
                </td>
                <td className="pr-2 py-2 align-top xl:pr-8 2xl:pr-2 2xl:py-4">640px</td>
                <td className="pr-2 py-2 align-top xl:pr-8 2xl:pr-2 2xl:py-4">
                  <code className="text-tailwind-blue">
                    @media (min-width: 640px) {"{"} ... {"}"}
                  </code>
                </td>
              </tr>
              <tr className="border-b border-gray-200">
                <td className="pr-2 py-2 align-top xl:pr-8 2xl:pr-2 2xl:py-4">
                  <code className="text-tailwind-blue">md</code>
                </td>
                <td className="pr-2 py-2 align-top xl:pr-8 2xl:pr-2 2xl:py-4">768px</td>
                <td className="pr-2 py-2 align-top xl:pr-8 2xl:pr-2 2xl:py-4">
                  <code className="text-tailwind-blue">
                    @media (min-width: 768px) {"{"} ... {"}"}
                  </code>
                </td>
              </tr>
              <tr className="border-b border-gray-200">
                <td className="pr-2 py-2 align-top xl:pr-8 2xl:pr-2 2xl:py-4">
                  <code className="text-tailwind-blue">lg</code>
                </td>
                <td className="pr-2 py-2 align-top xl:pr-8 2xl:pr-2 2xl:py-4">1024px</td>
                <td className="pr-2 py-2 align-top xl:pr-8 2xl:pr-2 2xl:py-4">
                  <code className="text-tailwind-blue">
                    @media (min-width: 1024px) {"{"} ... {"}"}
                  </code>
                </td>
              </tr>
              <tr className="border-b border-gray-200">
                <td className="pr-2 py-2 align-top xl:pr-8 2xl:pr-2 2xl:py-4">
                  <code className="text-tailwind-blue">xl</code>
                </td>
                <td className="pr-2 py-2 align-top xl:pr-8 2xl:pr-2 2xl:py-4">1280px</td>
                <td className="pr-2 py-2 align-top xl:pr-8 2xl:pr-2 2xl:py-4">
                  <code className="text-tailwind-blue">
                    @media (min-width: 1280px) {"{"} ... {"}"}
                  </code>
                </td>
              </tr>
              <tr className="border-b border-gray-200">
                <td className="pr-2 py-2 align-top xl:pr-8 2xl:pr-2 2xl:py-4">
                  <code className="text-tailwind-blue">2xl</code>
                </td>
                <td className="pr-2 py-2 align-top xl:pr-8 2xl:pr-2 2xl:py-4">1536px</td>
                <td className="pr-2 py-2 align-top xl:pr-8 2xl:pr-2 2xl:py-4">
                  <code className="text-tailwind-blue">
                    @media (min-width: 1536px) {"{"} ... {"}"}
                  </code>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Responsive;
