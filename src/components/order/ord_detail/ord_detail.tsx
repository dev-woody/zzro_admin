import {
  BaseBlock,
  BreadCrumb,
  Description,
  Table,
  Tabs,
  Title,
} from "lib/styles";
import { DescriptionItem } from "lib/styles/description/description";
import styled from "styled-components";
import { FaImage } from "react-icons/fa";

const OrdDetailBlock = styled(BaseBlock)``;

const SeparationBlock = styled.div`
  display: flex;
  width: 100%;
  margin-bottom: 1rem;
`;

const SmallBaseBox = styled.div`
  //! 색상 바꿀것
  /* border: 1px soild #dfdfdf; */
  border: 1px soild red;
  box-sizing: border-box;
  height: 100%;
`;

const SmallTitle = styled.div`
  padding: 1rem 1rem;
  font-weight: bold;
  background-color: #dfdfdf;
  border-radius: 1rem 1rem 0 0;
`;

const des_items: DescriptionItem[] = [
  {
    label: "시공업체",
    content: "업체",
  },
  {
    label: "공사명",
    content: "업체",
  },
  {
    label: "배송지",
    content: "업체",
  },
  {
    label: "현장인도자",
    content: "홍길동 (010-1234-5678)",
  },
  {
    label: "희망배송일시",
    content: "2023-12-12",
  },
  {
    label: "배송요청사항",
    content: "사항",
  },
];

const detailStatus = [
  {
    title: "발주번호",
    dataIndex: "ord_num",
  },
  {
    title: "발주상태",
    dataIndex: "ord_num",
  },
  {
    title: "판매업체지정",
    dataIndex: "ord_num",
  },
  {
    title: "결제상태",
    dataIndex: "ord_num",
  },
  {
    title: "배송상태",
    dataIndex: "ord_num",
  },
  {
    title: "결제로그",
    dataIndex: "ord_num",
  },
  {
    title: "",
    dataIndex: null,
    style: { width: "100%" },
  },
];

const content = [
  {
    ord_num: 1,
  },
];

const MaterialTab = () => {
  const materialColumn = [
    {
      title: "번호",
      dataIndex: "num",
    },
    {
      title: <FaImage />,
      dataIndex: "num",
    },
    {
      title: "카테고리/자재명/안내",
      dataIndex: "num",
    },
    {
      title: "단위",
      dataIndex: "num",
    },
    {
      title: "판매가/발주수량/판매금액",
      dataIndex: "num",
    },
    {
      title: "요청옵션/비용",
      dataIndex: "num",
    },
    {
      title: "소계",
      dataIndex: "num",
    },
    {
      title: "판매업체",
      dataIndex: "num",
    },
  ];

  const MaterialContent = [
    {
      num: 1,
    },
  ];

  return (
    <div>
      <SeparationBlock>
        <SmallBaseBox style={{ width: "30%" }}>
          <SmallTitle>기본정보</SmallTitle>
          <Description data={des_items} />
        </SmallBaseBox>
        <SmallBaseBox style={{ width: "100%", marginLeft: "2rem" }}>
          <SmallTitle>자재정보</SmallTitle>
          <Table columns={materialColumn} content={MaterialContent} />
        </SmallBaseBox>
      </SeparationBlock>
      <SeparationBlock>
        <SmallBaseBox style={{ width: "30%" }}>
          <SmallTitle>배송담당</SmallTitle>
          <Description data={des_items} />
        </SmallBaseBox>
        <SmallBaseBox style={{ width: "100%", marginLeft: "2rem" }}>
          <SmallTitle>판매업체</SmallTitle>
          <Table columns={materialColumn} content={MaterialContent} />
        </SmallBaseBox>
      </SeparationBlock>
    </div>
  );
};

const tabItems = [
  {
    key: 1,
    label: "자재목록",
    children: <MaterialTab />,
  },
  {
    key: 2,
    label: "시공목록",
    children: <div>시공목록</div>,
  },
];

const OrdDetail = () => {
  return (
    <OrdDetailBlock>
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
      <Title title={"발주 상세"} />
      <Table columns={detailStatus} content={content} />
      <div style={{ marginBottom: "2rem" }}></div>
      <Tabs items={tabItems} />
    </OrdDetailBlock>
  );
};

export default OrdDetail;
