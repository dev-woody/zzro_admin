import { Route, Routes } from "react-router-dom";
import FaqList from "./faq";
import InquiryList from "./inquiry";
import NoticeList from "./notice";
import NewsList from "./news";

const Board = () => {
  return (
    <Routes>
      <Route path="/Faq_list" element={<FaqList />} />
      <Route path="/inquiry_list" element={<InquiryList />} />
      <Route path="/notice_list" element={<NoticeList />} />
      <Route path="/news_list" element={<NewsList />} />
    </Routes>
  );
};

export default Board;
