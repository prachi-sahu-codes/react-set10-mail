import { Link } from "react-router-dom";

export const Card = ({ mId, unread, isStarred, subject, content }) => {
  return (
    <>
      <div className="btn-flex">
        <h3 className="card-head">Subject: {subject}</h3>
        <button className="btn-star">Star</button>
      </div>
      <p className="card-info">{content}</p>
      <div className="btn-flex">
        <Link to={`/mail/${mId}`}>View Details</Link>
        <div>
          <button className="btn-del">Delete</button>
          <button className="btn-read">Mark as Read</button>
          <button className="btn-spam">Report Spam</button>
        </div>
      </div>
    </>
  );
};
