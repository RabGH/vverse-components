"use client";

import React, { createContext, useContext, useState } from "react";

type OwnerContextType = {
  isOwner: boolean;
  setIsOwner: React.Dispatch<React.SetStateAction<boolean>>;
};

// Define the default value for isOwner
const defaultIsOwner = false;

// Create the context with the default value
const OwnerContext = createContext<OwnerContextType>({
  isOwner: defaultIsOwner,
  setIsOwner: () => {},
});

export const OwnerProvider = ({ children }: { children: React.ReactNode }) => {
  const [isOwner, setIsOwner] = useState(defaultIsOwner);

  return (
    <OwnerContext.Provider value={{ isOwner, setIsOwner }}>
      {children}
    </OwnerContext.Provider>
  );
};

export const useOwner = () => {
  return useContext(OwnerContext);
};
