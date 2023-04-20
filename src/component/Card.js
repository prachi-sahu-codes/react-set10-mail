import { Link } from "react-router-dom";
import { useData } from "../api/DataContext";

export const Card = ({
  mId,
  unread,
  isStarred,
  subject,
  content,
  isDeleted,
  isSpammed,
  noDetail,
}) => {
  const { dispatch } = useData();

  return (
    <>
      <div className="btn-flex">
        <h3 className="card-head">Subject: {subject}</h3>
        {isStarred ? (
          <button
            className="btn-star"
            onClick={() => dispatch({ type: "STAR-UNSTAR", payload: { mId } })}
          >
            Unstar
          </button>
        ) : (
          <button
            className="btn-star"
            onClick={() => dispatch({ type: "STAR-UNSTAR", payload: { mId } })}
          >
            Star
          </button>
        )}
      </div>
      <p className="card-info">{content}</p>
      <div className="btn-flex">
        {!noDetail && (
          <Link to={`/mail/${mId}`} className="card-link">
            View Details
          </Link>
        )}
        <div>
          {isDeleted ? (
            <button
              className="btn-del"
              onClick={() => dispatch({ type: "RESTORE", payload: { mId } })}
            >
              Restore
            </button>
          ) : (
            <button
              className="btn-del"
              onClick={() => dispatch({ type: "DELETE", payload: { mId } })}
            >
              Delete
            </button>
          )}

          <button
            className="btn-read"
            onClick={() => dispatch({ type: "READ-UNREAD", payload: { mId } })}
          >
            Mark as {unread ? <span>Unread</span> : <span>Read</span>}
          </button>

          <button
            className="btn-spam"
            onClick={() => dispatch({ type: "SPAM", payload: { mId } })}
          >
            Report Spam
          </button>
        </div>
      </div>
    </>
  );
};
