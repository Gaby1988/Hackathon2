import React, { createContext, useState, useEffect, useMemo } from "react";
import PropTypes from "prop-types";

export const IsDesktopContext = createContext();

export function IsDesktopProvider({ children }) {
  const [isAdmin, setIsAdmin] = useState(false);

  const contextValueIsDesktop = useMemo(
    () => ({ isAdmin, setIsAdmin }),
    [isAdmin]
  );

  return (
    <IsDesktopContext.Provider value={contextValueIsDesktop}>
      {children}
    </IsDesktopContext.Provider>
  );
}
IsDesktopProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
