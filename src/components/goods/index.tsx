import { Route, Routes } from "react-router-dom";
import GoodsCategory from "./goodsCategory";

const Goods = () => {
  return (
    <Routes>
      <Route path="/goods_category" element={<GoodsCategory />} />
    </Routes>
  );
};

export default Goods;
