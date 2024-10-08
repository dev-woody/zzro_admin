import { Route, Routes } from "react-router-dom";
import ClientList from "./clientList";
import ClientWorkList from "./clientWorkList";
import IndCfg from "./indCfg";
import ClientRegister from "./register";

const Client = () => {
  return (
    <Routes>
      <Route path="/client_list" element={<ClientList />} />
      <Route path="/client_list/register" element={<ClientRegister />} />
      <Route path="/client_work_list" element={<ClientWorkList />} />
      <Route path="/ind_cfg" element={<IndCfg />} />
    </Routes>
  );
};

export default Client;
