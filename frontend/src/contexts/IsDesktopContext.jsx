import React, { createContext, useState, useEffect, useMemo } from "react";
import PropTypes from "prop-types";

export const IsDesktopContext = createContext();

export function IsDesktopProvider({ children }) {
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 1024);

  useEffect(() => {
    const handleResize = () => setIsDesktop(window.innerWidth >= 1024);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const contextValueIsDesktop = useMemo(() => ({ isDesktop }), [isDesktop]);

  return (
    <IsDesktopContext.Provider value={contextValueIsDesktop}>
      {children}
    </IsDesktopContext.Provider>
  );
}
IsDesktopProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
