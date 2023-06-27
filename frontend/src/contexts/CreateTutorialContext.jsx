import React, { createContext, useMemo, useState } from "react";
import PropTypes from "prop-types";

export const CreateTutorialContext = createContext();

export function CreateTutorialProvider({ children }) {
  const [forms, setForms] = useState({});

  const addForm = (formData) => {
    setForms([...forms, formData]);
  };

  const contextValue = useMemo(
    () => ({ forms, setForms, addForm }),
    [forms, setForms, addForm]
  );

  return (
    <CreateTutorialContext.Provider value={contextValue}>
      {children}
    </CreateTutorialContext.Provider>
  );
}
CreateTutorialProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
