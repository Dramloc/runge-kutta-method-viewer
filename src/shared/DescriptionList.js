/** @jsxImportSource @emotion/react */
import "twin.macro";

export const DescriptionList = (props) => {
  return <dl tw="sm:divide-y sm:divide-gray-200" {...props} />;
};

export const Description = (props) => {
  return (
    <div tw="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6" {...props} />
  );
};

export const DescriptionLabel = (props) => {
  return <dt tw="text-sm font-medium text-gray-500" {...props} />;
};

export const DescriptionValue = (props) => {
  return (
    <dd tw="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2" {...props} />
  );
};
