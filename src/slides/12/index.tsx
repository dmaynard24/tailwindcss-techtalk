import { FC } from "react";
import Heading from "../../components/Heading/Heading";
import "./styles.css";

const Twelve: FC = () => {
  return (
    <div>
      <Heading text="Responsive" />
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/3">
          <p className="max-w-xl mb-8 lg:mb-0">
            Every utility class in Tailwind can be applied conditionally at
            different breakpoints. There are five breakpoints by default,
            inspired by common device resolutions:
          </p>
        </div>
        <div className="w-full lg:w-2/3 lg:pl-12">
          <table className="text-sm text-left xl:text-lg 2xl:text-2xl">
            <thead>
              <tr>
                <th>Breakpoint prefix</th>
                <th>Minimum width</th>
                <th>CSS</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <code>sm</code>
                </td>
                <td>640px</td>
                <td>
                  <code>
                    @media (min-width: 640px) {"{"} ... {"}"}
                  </code>
                </td>
              </tr>
              <tr>
                <td>
                  <code>md</code>
                </td>
                <td>768px</td>
                <td>
                  <code>
                    @media (min-width: 768px) {"{"} ... {"}"}
                  </code>
                </td>
              </tr>
              <tr>
                <td>
                  <code>lg</code>
                </td>
                <td>1024px</td>
                <td>
                  <code>
                    @media (min-width: 1024px) {"{"} ... {"}"}
                  </code>
                </td>
              </tr>
              <tr>
                <td>
                  <code>xl</code>
                </td>
                <td>1280px</td>
                <td>
                  <code>
                    @media (min-width: 1280px) {"{"} ... {"}"}
                  </code>
                </td>
              </tr>
              <tr>
                <td>
                  <code>2xl</code>
                </td>
                <td>1536px</td>
                <td>
                  <code>
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

export default Twelve;
