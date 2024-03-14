import { Route, Routes } from "react-router-dom";
import BannerList from "./banner";
import PushCfg from "./push_cfg";
import PushList from "./push_list";
import BanefitNoti from "./benefit_noti";

const AppCfg = () => {
  return (
    <Routes>
      <Route path="/banner_list" element={<BannerList />} />
      <Route path="/push_send_cfg" element={<PushCfg />} />
      <Route path="/push_send_list" element={<PushList />} />
      <Route path="/benefit_notification" element={<BanefitNoti />} />
    </Routes>
  );
};

export default AppCfg;
