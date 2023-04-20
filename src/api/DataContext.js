import { useReducer, useState } from "react";
import { createContext } from "react";

import { mails } from "./data";
import { useContext } from "react";

export const DataContext = createContext(null);

export const DataProvider = ({ children }) => {
  const [mailData, setMailData] = useState(mails);

  const mailReducer = (state, action) => {
    switch (action.type) {
      case "READ":
        return state.filter((mail) => mail.unread);
      case "STARRED":
        return state.filter((mail) => mail.isStarred);
      default:
        console.log("Something went wrong");
        return state;
    }
  };

  const [state, dispatch] = useReducer(mailReducer, [...mailData]);

  return (
    <DataContext.Provider
      value={{
        mailData,
        state,
        dispatch,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export const useData = () => useContext(DataContext);
