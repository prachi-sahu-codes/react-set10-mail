import { useData } from "../api/DataContext";

import { Card } from "../component/Card";
import { Filters } from "../component/Filters";

export const Inbox = () => {
  const { state } = useData();
  return (
    <div className="main-content">
      <Filters />
      <div className="unread-title">Unread: </div>
      <ul className="card-list">
        {state.map((mail) => (
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
