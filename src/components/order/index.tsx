import { Route, Routes } from "react-router-dom";
import OrdInspection from "./ord_inspection";
import OrdModify from "./ord_modify/ord_modify";
import OrdReturn from "./return";

const Order = () => {
  return (
    <Routes>
      <Route path="/ord_inspection" element={<OrdInspection />} />
      <Route path="/ord_modify" element={<OrdModify />} />
      <Route path="/before_return" element={<OrdReturn />} />
    </Routes>
  );
};

export default Order;
