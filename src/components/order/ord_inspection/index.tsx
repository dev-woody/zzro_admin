import {
  BaseBlock,
  BreadCrumb,
  Input,
  Table,
  Title,
  Select,
  Button,
} from "lib/styles";
import styled from "styled-components";
import { FaPlus } from "react-icons/fa";

const OrdInspectionBlock = styled(BaseBlock)``;

const testList = [{ name: "테스트", id: "test" }];

const categoryFilter = [
  {
    title: "발주상태",
    filterSource: (
      <Select
        placeholder="발주검수중"
        optionList={testList}
        actions={(id: string) => console.log(id)}
        style={{ width: "150px" }}
      />
    ),
  },
  {
    title: "진열상태",
    filterSource: (
      <Select
        placeholder="진열상태"
        optionList={testList}
        actions={(id: string) => console.log(id)}
        style={{ width: "150px" }}
      />
    ),
  },
  {
    title: "공사명",
    filterSource: (
      <Select
        placeholder="공사명"
        optionList={testList}
        actions={(id: string) => console.log(id)}
      />
    ),
  },
  {
    title: "발주번호",
    filterSource: <Input placeholder="발주번호" />,
  },
  {
    title: "배송지",
    filterSource: <Input placeholder="배송지" />,
  },
  {
    title: "",
    filterSource: null,
  },
  {
    title: "",
    filterSource: (
      <Button status="primary">
        <FaPlus />
        &nbsp;신규발주등록
      </Button>
    ),
  },
];

const categoryData = [
  {
    index: 1,
    ord_num: 1234567890,
    name: { com_name: "자재로", con_name: "정자동 현장" },
    ord_status: "발주검수중",
    ord_date: { created_at: "2023-11-19 17:34", wanted_at: "2023-12-04 09:00" },
    price: "166,000",
    opt_price: "",
    shipping_fee: "",
    shipper: "자재로",
    addr: {
      main_addr: "경기 성남시 분당구 성남대로331번길 8 (정자동)",
      detail_addr: "1층",
    },
    pay_status: "입금대기",
    deli_status: "배송상태",
  },
];

const OrdInspection = () => {
  const goodsColumns = [
    {
      title: "번호",
      dataIndex: "index",
    },
    {
      title: "발주번호",
      dataIndex: "ord_num",
    },
    {
      title: "시공업체/공사명",
      dataIndex: "name",
      render: (name: any) => (
        <div style={{ display: "flex", flexDirection: "column" }}>
          <span style={{ padding: "0.2rem 0" }}>{name.com_name}</span>
          <span style={{ padding: "0.2rem 0" }}>{name.con_name}</span>
        </div>
      ),
    },
    {
      title: "발주상태",
      dataIndex: "ord_status",
    },
    {
      title: "발주신청/희망배송",
      dataIndex: "ord_date",
      render: (ord_date: any) => (
        <div style={{ display: "flex", flexDirection: "column" }}>
          <span style={{ padding: "0.2rem 0" }}>{ord_date.created_at}</span>
          <span style={{ padding: "0.2rem 0" }}>{ord_date.wanted_at}</span>
        </div>
      ),
    },
    {
      title: "상품금액",
      dataIndex: "price",
    },
    {
      title: "요청옵션",
      dataIndex: "opt_price",
    },
    {
      title: "배송비",
      dataIndex: "shipping_fee",
    },
    {
      title: "배송담당",
      dataIndex: "shipper",
      render: (shipper: string) =>
        shipper === "자재로" ? (
          <span style={{ color: "var(--cus-color-error)" }}>자재로</span>
        ) : shipper === "판매업체" ? (
          <span style={{ color: "var(--cus-color-info)" }}>판매업체</span>
        ) : (
          ""
        ),
    },
    {
      title: "배송지",
      dataIndex: "addr",
      render: (addr: any) => (
        <div style={{ display: "flex", flexDirection: "column" }}>
          <span style={{ padding: "0.2rem 0" }}>{addr.main_addr}</span>
          <span style={{ padding: "0.2rem 0" }}>{addr.detail_addr}</span>
        </div>
      ),
    },
    {
      title: "결제상태",
      dataIndex: "pay_status",
    },
    {
      title: "배송상태",
      dataIndex: "deli_status",
    },
  ];

  return (
    <OrdInspectionBlock>
      <BreadCrumb
        indicator={[
          {
            name: "홈",
            url: `/`,
          },
          {
            name: "발주관리",
            url: ``,
          },
          { name: "발주 검수중", url: "" },
        ]}
      />
      <Title title={"발주 검수중"} />
      <Table.Filter
        columns={goodsColumns}
        content={categoryData}
        filter={categoryFilter}
      />
    </OrdInspectionBlock>
  );
};

export default OrdInspection;
