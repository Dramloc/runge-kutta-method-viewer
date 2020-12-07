/** @jsxImportSource @emotion/react */
import { NavLink } from "react-router-dom";
import "twin.macro";
import tw from "twin.macro";

export const Tabs = ({ children, ...props }) => {
  return (
    <nav tw="-mb-px flex space-x-8" aria-label="Tabs" {...props}>
      {children}
    </nav>
  );
};

export const Tab = (props) => {
  return (
    <NavLink
      tw="border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm"
      css={{
        "&.active": tw`border-primary-500 text-primary-600 hover:(border-primary-500 text-primary-600)`,
      }}
      {...props}
    />
  );
};
