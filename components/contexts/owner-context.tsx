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

/**
 * Create a provider component that wraps its children with the OwnerContext and manages the isOwner state.
 *
 * @param {Object} props - The props object.
 * @param {React.ReactNode} props.children - The children to be wrapped by the provider.
 * @return {JSX.Element} The JSX element representing the owner provider.
 */

export const OwnerProvider = ({ children }: { children: React.ReactNode }) => {
  const [isOwner, setIsOwner] = useState(defaultIsOwner);

  return (
    <OwnerContext.Provider value={{ isOwner, setIsOwner }}>
      {children}
    </OwnerContext.Provider>
  );
};

/**
 * Returns the owner from the OwnerContext.
 *
 * @return {OwnerType} The owner object.
 */
export const useOwner = () => {
  return useContext(OwnerContext);
};
