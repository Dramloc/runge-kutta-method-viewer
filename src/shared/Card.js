/** @jsxImportSource @emotion/react */
import "twin.macro";

export const Card = ({ as: Component = "section", ...props }) => {
  return (
    <Component tw="bg-white shadow overflow-hidden sm:rounded-lg -mx-4 sm:(mx-0)" {...props} />
  );
};

export const CardHeader = (props) => {
  return (
    <header
      tw="px-4 py-5 sm:px-6 space-y-1 sm:(flex items-center justify-between space-y-0)"
      {...props}
    />
  );
};

export const CardTitle = (props) => {
  // eslint-disable-next-line jsx-a11y/heading-has-content
  return <h2 tw="text-lg leading-6 font-medium text-gray-900" {...props} />;
};

export const CardContent = (props) => {
  return <div tw="border-t border-gray-200 px-4 py-5 sm:p-0" {...props} />;
};
