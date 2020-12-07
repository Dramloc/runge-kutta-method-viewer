/** @jsxImportSource @emotion/react */
import katex from "katex";
import "katex/dist/katex.css";
import { useEffect, useRef } from "react";
import "twin.macro";

export const Katex = ({
  as: Component = "div",
  children,
  displayMode = false,
  throwOnError = false,
}) => {
  const ref = useRef();

  useEffect(() => {
    if (ref.current) {
      katex.render(children, ref.current, {
        displayMode,
        throwOnError,
      });
    }
  }, [children, displayMode, throwOnError]);

  return <Component tw="overflow-x-auto overflow-y-hidden" ref={ref} />;
};
