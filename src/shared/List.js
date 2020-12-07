/** @jsxImportSource @emotion/react */
import { Link } from "react-router-dom";
import "twin.macro";

export const List = (props) => {
  return <ul tw="divide-y divide-gray-200" {...props} />;
};

export const ListItem = (props) => {
  return <li {...props} />;
};

export const ListItemLink = (props) => {
  return <Link tw="block hover:bg-gray-50" {...props} />;
};

export const ListItemContent = (props) => {
  return <div tw="px-4 py-4 sm:px-6" {...props} />;
};

export const ListItemText = (props) => {
  return <p tw="text-sm font-medium truncate" {...props} />;
};
