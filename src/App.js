import { Routes, Route } from "react-router-dom";
import { HiMail } from "react-icons/hi";

import "./App.css";
import { Inbox } from "./pages/Inbox";
import { Spam } from "./pages/Spam";
import { Trash } from "./pages/Trash";
import { Header } from "./component/Header";
import { MailDetail } from "./pages/MailDetail";
import { NotFound } from "./pages/NotFound";

function App() {
  return (
    <div className="App">
      <h1 className="main-heading">
        <span>
          {" "}
          <HiMail />
        </span>
        <span className="title"> Mail Box</span>
      </h1>
      <div className="view-flex">
        <Header />
        <Routes>
          <Route path="/" element={<Inbox />} />
          <Route path="/trash" element={<Trash />} />
          <Route path="/spam" element={<Spam />} />
          <Route path="/mail/:mailId" element={<MailDetail />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
