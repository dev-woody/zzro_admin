import { Route, Routes } from "react-router-dom";
import OrdInspection from "./ord_inspection";
import OrdModify from "./ord_modify/ord_modify";
import BeReturn from "./return";
import OrdDetail from "./ord_detail/ord_detail";
import BePayment from "./before_payment";
import AfPayment from "./after_payment";
import BeShipping from "./before_shipping";
import OrdShipping from "./ord_shipping";
import AfShipping from "./after_shipping";
import OrdReturn from "./ord_return";
import AfReturn from "./after_return";
import OrdRefund from "./ord_refund";
import BeRefund from "./ord_refund";
import AfRefund from "./after_refund";
import OrdCancel from "./ord_cancel";
import OrdInspList from "./inspection_list";
import OrdList from "./ord_list";
import Construction from "./construction";

const Order = () => {
  return (
    <Routes>
      <Route path="/ord_inspection" element={<OrdInspection />} />
      <Route path="/ord_modify" element={<OrdModify />} />
      <Route path="/before_payment" element={<BePayment />} />
      <Route path="/after_payment" element={<AfPayment />} />
      <Route path="/before_shipping" element={<BeShipping />} />
      <Route path="/ord_shipping" element={<OrdShipping />} />
      <Route path="/after_shipping" element={<AfShipping />} />
      <Route path="/before_return" element={<BeReturn />} />
      <Route path="/ord_return" element={<OrdReturn />} />
      <Route path="/after_return" element={<AfReturn />} />
      <Route path="/before_refund" element={<BeRefund />} />
      <Route path="/after_refund" element={<AfRefund />} />
      <Route path="/ord_cancel" element={<OrdCancel />} />
      <Route path="/ord_inspection_list" element={<OrdInspList />} />
      <Route path="/ord_list" element={<OrdList />} />
      <Route path="/ord_detail" element={<OrdDetail />} />
      <Route path="/construction" element={<Construction />} />
    </Routes>
  );
};

export default Order;
