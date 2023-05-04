import { useReducer, useState } from "react";
import { createContext } from "react";

import { mails } from "./data";
import { useContext } from "react";

export const DataContext = createContext(null);

export const DataProvider = ({ children }) => {
  const [mailData, setMailData] = useState(mails);

  const mailReducer = (state, action) => {
    switch (action.type) {
      //checkboxes
      case "STARRED":
        return { ...state, isStarred: !state.isStarred };

      case "READ":
        return { ...state, isRead: !state.isRead };
      //buttons
      case "DELETE":
        const updatedMail = state.mails.map((email) => {
          if (email.mId === action.payload.mId) {
            return { ...email, isDeleted: true };
          } else {
            return email;
          }
        });
        return { ...state, mails: updatedMail };

      case "RESTORE":
        const restoreMail = state.mails.map((email) => {
          if (email.mId === action.payload.mId) {
            return { ...email, isDeleted: !email.isDeleted };
          } else {
            return email;
          }
        });
        return { ...state, mails: restoreMail };

      case "SPAM":
        const spammedMail = state.mails.map((email) => {
          if (email.mId === action.payload.mId) {
            return { ...email, isSpammed: true };
          } else {
            return email;
          }
        });
        return { ...state, mails: spammedMail };

      case "STAR-UNSTAR":
        const starredMail = state.mails.map((email) => {
          if (email.mId === action.payload.mId) {
            return { ...email, isStarred: !email.isStarred };
          } else {
            return email;
          }
        });
        return { ...state, mails: starredMail };

      case "READ-UNREAD":
        const readUnreadMail = state.mails.map((email) => {
          if (email.mId === action.payload.mId) {
            return { ...email, unread: !email.unread };
          } else {
            return email;
          }
        });
        const unread = readUnreadMail.reduce(
          (acc, email) => (email.unread ? acc : acc + 1),
          0
        );
        return { ...state, mails: readUnreadMail, unReadCount: unread };

      default:
        console.log("Something went wrong");
        return state;
    }
  };

  const initialUnread = mailData.reduce(
    (acc, email) => (email.unread ? acc : acc + 1),
    0
  );

  const [state, dispatch] = useReducer(mailReducer, {
    mails: [...mailData],
    isRead: false,
    isStarred: false,
    unReadCount: initialUnread,
  });

  const filteredMails = state.mails.filter(
    (mail) =>
      (state.isRead ? mail.unread : true) &&
      (state.isStarred ? mail.isStarred : true) &&
      !mail.isDeleted &&
      !mail.isSpammed
  );

  return (
    <DataContext.Provider
      value={{
        mailData,
        filteredMails,
        state,
        dispatch,
        setMailData,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export const useData = () => useContext(DataContext);
