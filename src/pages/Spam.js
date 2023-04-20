import { useData } from "../api/DataContext";
import { Card } from "../component/Card";

export const Spam = () => {
  const { state } = useData();
  const spammedMails = state.mails.filter((email) => email.isSpammed);

  return (
    <div className="main-content">
      {spammedMails.length === 0 ? (
        <h1 className="emptyListTitle">Your spam list is empty!</h1>
      ) : (
        <>
          <h1>Spammed Mails</h1>
          <ul className="card-list">
            {spammedMails.map((mail) => (
              <li
                key={mail.mId}
                className="card"
                style={{ backgroundColor: mail.unread ? "#F0FAFF" : "#FAFFFF" }}
              >
                <Card {...mail} />
              </li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
};
