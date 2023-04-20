import { useParams } from "react-router";
import { useData } from "../api/DataContext";
import { Card } from "../component/Card";

export const MailDetail = () => {
  const { mailId } = useParams();
  const { state } = useData();
  const findMail = state.mails.find((mail) => mail.mId === mailId);
  return (
    <div className="main-content">
      <h1>Mail Details</h1>
      <div className="card">
        <Card {...findMail} noDetail />
      </div>
    </div>
  );
};
