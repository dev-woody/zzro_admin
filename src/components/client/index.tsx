import { Route, Routes } from "react-router-dom";
import ClientList from "./clientList";

const Client = () => {
  return (
    <Routes>
      <Route path="/client_list" element={<ClientList />} />
    </Routes>
  );
};

export default Client;
