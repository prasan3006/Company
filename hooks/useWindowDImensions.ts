import { useState, useEffect } from "react";

function getWindowDimensions() {
  if (
    typeof window === `undefined` ||
    !window.innerWidth ||
    !window.innerHeight
  ) {
    return null;
  }

  const { innerWidth: width, innerHeight: height } = window;
  return { width, height };
}

export default function useWindowDimensions() {
  const dimensions = getWindowDimensions();
  if (!dimensions) {
    return null;
  }

  const [windowDimensions, setWindowDimensions] = useState(dimensions);

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return windowDimensions;
}
