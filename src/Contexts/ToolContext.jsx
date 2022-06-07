import React, { createContext, useState } from "react";

export const TitleContext = createContext();

const TitleContextProvider = ({children}) => {
  const [title, setTitle] = useState([
    {
      Balancelnquiry: "Balancelnquiry",
    },
    {
      Withdrawal: "Withdrawal",
    },
    {
      Transfer: "Transfer",
    },
    {
      Change: "Change Pin",
    },
    {
      Transactions: "Transactions",
    },
    {
      Other: "Other",
    },
  ]);

  const TitleData = {
     title
  };

  return (
    <TitleContext.Provider value={TitleData} >
        {children}
    </TitleContext.Provider>
  )
};

export default TitleContextProvider
