import { useData } from "../api/DataContext";

import { Card } from "../component/Card";
import { Filters } from "../component/Filters";

export const Inbox = () => {
  const { filteredMails, state } = useData();

  return (
    <div className="main-content">
      <Filters />
      <p className="unread-title">
        Unread:
        <span className="unread-count">{state.unReadCount}</span>
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
