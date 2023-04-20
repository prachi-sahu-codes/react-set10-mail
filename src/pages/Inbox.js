import { useData } from "../api/DataContext";

import { Card } from "../component/Card";
import { Filters } from "../component/Filters";

export const Inbox = () => {
  const { filteredMails, unread } = useData();

  return (
    <div className="main-content">
      <Filters />
      <p className="unread-title">
        Unread:{" "}
        <span
          style={{
            fontSize: "1.7rem",
            paddingLeft: "0.3rem",
            paddingBottom: "0.5rem",
          }}
        >
          {unread}
        </span>
      </p>
      <ul className="card-list">
        {filteredMails.map((mail) => (
          <li
            key={mail.mId}
            className="card"
            style={{ backgroundColor: mail.unread ? "#F0FAFF" : "#FAFFFF" }}
          >
            <Card {...mail} />
          </li>
        ))}
      </ul>
    </div>
  );
};
