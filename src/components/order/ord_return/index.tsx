import {
  BaseBlock,
  BreadCrumb,
  Input,
  Table,
  Tag,
  Title,
  Select,
  Button,
} from "lib/styles";
import styled from "styled-components";
import { FaPlus } from "react-icons/fa";

const OrdReturnBlock = styled(BaseBlock)``;

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
    title: "시공업체",
    filterSource: (
      <Select
        placeholder="시공업체"
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
    cancel_count: 1,
    com_name: "구현모",
    con_name: "정자동 현장",
    pay_status: "결제완료",
    deli_status: "배송완료",
    cancel_status: "전체취소",
    cancel_at: "2023-12-07 11:06",
    cancel_sum: "1,125,000",
    refund_diff: "",
    refund_price: "1,125,000",
    cash_refund: "",
    point_refund: "",
    return_status: "반품대기",
    refund_status: "환불대기",
    refund_date: "",
  },
];

const OrdReturn = () => {
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
      title: "취소회차",
      dataIndex: "cancel_count",
    },
    {
      title: "시공업체/공사명",
      dataIndex: "com_name",
    },
    {
      title: "공사명",
      dataIndex: "con_name",
    },

    {
      title: "결제상태",
      dataIndex: "pay_status",
    },
    {
      title: "배송상태",
      dataIndex: "deli_status",
    },
    {
      title: "취소구분",
      dataIndex: "cancel_status",
    },
    {
      title: "취소일시",
      dataIndex: "cancel_at",
    },
    {
      title: "취소합계",
      dataIndex: "cancel_sum",
    },
    {
      title: "환불차감",
      dataIndex: "refund_diff",
    },
    {
      title: "확정환불금액",
      dataIndex: "refund_price",
    },
    {
      title: "현금환불",
      dataIndex: "cash_refund",
    },
    {
      title: "포인트환불",
      dataIndex: "point_refund",
    },
    {
      title: "반품상태",
      dataIndex: "return_status",
    },
    {
      title: "환불상태",
      dataIndex: "refund_status",
    },
    {
      title: "환불일시",
      dataIndex: "refund_date",
    },
  ];

  return (
    <OrdReturnBlock>
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
          { name: "반품진행", url: "" },
        ]}
      />
      <Title title={"반품진행"} />
      <Table.Filter
        columns={goodsColumns}
        content={categoryData}
        filter={categoryFilter}
      />
    </OrdReturnBlock>
  );
};

export default OrdReturn;
