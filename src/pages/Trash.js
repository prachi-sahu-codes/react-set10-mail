import { useData } from "../api/DataContext";
import { Card } from "../component/Card";

export const Trash = () => {
  const { state } = useData();
  const deletedMails = state.mails.filter((email) => email.isDeleted);

  return (
    <div className="main-content">
      {deletedMails.length === 0 ? (
        <h1>Your trash is empty!</h1>
      ) : (
        <>
          <h1>Deleted Mails</h1>
          <ul className="card-list">
            {deletedMails.map((mail) => (
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
