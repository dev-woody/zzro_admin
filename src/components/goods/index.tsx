import { Route, Routes } from "react-router-dom";
import GoodsCategory from "./goodsCategory";
import GoodsList from "./goods_list";

const Goods = () => {
  return (
    <Routes>
      <Route path="/goods_category" element={<GoodsCategory />} />
      <Route path="/goods_list" element={<GoodsList />} />
    </Routes>
  );
};

export default Goods;
