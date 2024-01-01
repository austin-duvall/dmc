import React, { useState, useContext, createContext } from 'react';

const MMContext = createContext();

export default function MMState({ children }) {

  const [mmOpen, setMMOpen] = useState(false);

  return (
    <MMContext.Provider value={{ mmOpen, setMMOpen }}>
      {children}
    </MMContext.Provider>
  )
};

export const useMMContext = () => useContext(MMContext)