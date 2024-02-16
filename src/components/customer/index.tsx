import { Route, Routes } from "react-router-dom";
import CustomerList from "./customerList";
import IndCfg from "./indCfg";

const Customer = () => {
  return (
    <Routes>
      <Route path="/customer_list" element={<CustomerList />} />
      <Route path="/ind_cfg" element={<IndCfg />} />
    </Routes>
  );
};

export default Customer;
