import React, { createContext, useState } from "react";

export const TitleContext = createContext();

const TitleContextProvider = ({ children }) => {
  const [title, setTitle] = useState("");

  const TitleData = {
    setTitle,
    title,
  };

  return (
    <TitleContext.Provider value={TitleData}>{children}</TitleContext.Provider>
  );
};

export default TitleContextProvider;
