import React, { useState, useContext } from "react";

export const OpenContext = React.createContext();

export const useOpenContext = () => useContext(OpenContext);

export function OpenProvider(value = false, children) {
  const [open, setOpen] = useState(value);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <OpenContext.Provider value={ {open, handleDrawerOpen, handleDrawerClose} }>
      {children}
    </OpenContext.Provider>
  );
}