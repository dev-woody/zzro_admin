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

const ConstructionBlock = styled(BaseBlock)``;

const testList = [{ name: "테스트", id: "test" }];

const categoryFilter = [
  {
    title: "시공상태",
    filterSource: (
      <Select
        placeholder="시공상태"
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
    title: "시공지",
    filterSource: <Input placeholder="시공지" />,
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
    con_status: "확인중",
    ord_date: { created_at: "2023-11-19 17:34", wanted_at: "2023-12-04 09:00" },
    price: "166,000",
    addr: {
      main_addr: "경기 성남시 분당구 성남대로331번길 8 (정자동)",
      detail_addr: "1층",
    },
  },
];

const Construction = () => {
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
      title: "시공상태",
      dataIndex: "con_status",
    },
    {
      title: "시공금액",
      dataIndex: "price",
    },
    {
      title: "시공지",
      dataIndex: "addr",
      render: (addr: any) => (
        <div style={{ display: "flex", flexDirection: "column" }}>
          <span style={{ padding: "0.2rem 0" }}>{addr.main_addr}</span>
          <span style={{ padding: "0.2rem 0" }}>{addr.detail_addr}</span>
        </div>
      ),
    },
  ];

  return (
    <ConstructionBlock>
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
          { name: "시공관리", url: "" },
        ]}
      />
      <Title title={"시공관리"} />
      <Table.Filter
        columns={goodsColumns}
        content={categoryData}
        filter={categoryFilter}
      />
    </ConstructionBlock>
  );
};

export default Construction;
