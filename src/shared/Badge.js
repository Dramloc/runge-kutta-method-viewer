/** @jsxImportSource @emotion/react */
import "twin.macro";

export const BadgeList = (props) => {
  return <dl tw="flex items-center space-x-2" {...props} />;
};

export const Badge = (props) => {
  return <div tw="inline-flex items-center" {...props} />;
};

export const BadgeLabel = (props) => {
  return (
    <dt
      tw="bg-primary-100 text-xs font-medium text-primary-800 px-2 py-0.5 rounded-l"
      {...props}
    />
  );
};

export const BadgeValue = (props) => {
  return (
    <dd
      tw="bg-primary-600 text-xs font-medium text-white px-2 py-0.5 rounded-r"
      {...props}
    />
  );
};
