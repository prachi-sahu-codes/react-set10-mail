import { useParams } from "react-router";

export const MailDetail = () => {
  const { mailId } = useParams();
  return <div>mail detail{mailId}</div>;
};
