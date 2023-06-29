import React, { createContext, useState, useMemo } from "react";
import PropTypes from "prop-types";

export const IsDesktopContext = createContext();

export function IsDesktopProvider({ children }) {
  const [isAdmin, setIsAdmin] = useState(false);
  const [brand, setBrand] = useState("");
  const [model, setModel] = useState("");
  const [storageCapacity, setStorageCapacity] = useState("");
  const [condition, setCondition] = useState("");
  const [ram, setRam] = useState("");
  const [price, setPrice] = useState(0);

  const contextValueIsDesktop = useMemo(
    () => ({
      isAdmin,
      setIsAdmin,
      brand,
      setBrand,
      model,
      setModel,
      storageCapacity,
      setStorageCapacity,
      condition,
      setCondition,
      ram,
      setRam,
      price,
      setPrice,
    }),
    [isAdmin, brand, model, storageCapacity, condition, ram, price]
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
