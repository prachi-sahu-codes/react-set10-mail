import { useData } from "../api/DataContext";

export const Filters = () => {
  const { state, dispatch } = useData();

  return (
    <>
      <h4>Filters </h4>
      <label>
        <input
          type="checkbox"
          name="mail"
          checked={state.isRead}
          onChange={() => dispatch({ type: "READ" })}
        />
        Show unread mails
      </label>
      <label>
        <input
          type="checkbox"
          name="mail"
          checked={state.isStarred}
          onChange={() => dispatch({ type: "STARRED" })}
        />
        Show starred mails
      </label>
    </>
  );
};
