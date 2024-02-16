import {
  BaseBlock,
  BreadCrumb,
  Button,
  StyledSearchInput,
  TimePicker,
  Table,
  Tabs,
  Title,
} from "lib/styles";
import styled from "styled-components";
import { FaArrowUp, FaArrowDown } from "react-icons/fa6";

const IndCfgBlock = styled(BaseBlock)``;

const indColumn = [
  {
    title: "순서",
    dataIndex: "order",
    render: () => (
      <>
        <Button>
          <FaArrowUp />
        </Button>
        <Button>
          <FaArrowDown />
        </Button>
      </>
    ),
  },
  {
    title: "번호",
    dataIndex: "order",
  },
  {
    title: "회원탈퇴사유",
    dataIndex: "reason",
  },
  {
    title: "사용횟수",
    dataIndex: "usedNum",
  },
  {
    title: "수정",
    dataIndex: "modify",
    render: () => <Button status="primary">수정</Button>,
  },
];

const indData = [
  {
    order: 0,
    reason: "UX/UI가 불편해서",
    usedNum: 2,
  },
  {
    order: 1,
    reason: "타사 대비 가격이 비싸서",
    usedNum: 2,
  },
  {
    order: 2,
    reason: "앱 용량이 커서",
    usedNum: 2,
  },
  {
    order: 3,
    reason: "찾는 상품이 없어서",
    usedNum: 2,
  },
  {
    order: 4,
    reason: "이용을 잘 하지 않아서",
    usedNum: 2,
  },
];

const timeData = () => {
  let timeTable = [];
  let time = 7;
  for (let i = 0; i < 23; i++) {
    let min = i % 2 === 1 ? "30" : "00";
    if (i > 1 && i % 2 !== 1) {
      time = time + 1;
    }
    timeTable.push(`${time}: ${min}`);
  }

  return timeTable;
};

const tabs = [
  {
    key: 0,
    label: "주요판매공정",
    children: (
      <div>
        <Table columns={indColumn} content={indData} />
        <div
          style={{ display: "flex", alignItems: "center", margin: "0.5rem 0" }}
        >
          <span style={{ marginRight: "1rem" }}>주요판매공정</span>
          <StyledSearchInput btnText="추가" />
        </div>
      </div>
    ),
  },
  {
    key: 1,
    label: "선정사유",
    children: <div>선정사유</div>,
  },
  {
    key: 2,
    label: "미선정사유",
    children: <div>미선정사유</div>,
  },
  {
    key: 3,
    label: "가이드라인",
    children: <div>가이드라인</div>,
  },
  {
    key: 4,
    label: "단위",
    children: <div>단위</div>,
  },
  {
    key: 5,
    label: "배송차량",
    children: <div>배송차량</div>,
  },
  {
    key: 6,
    label: "배송시간",
    children: (
      <div>
        <div style={{ display: "flex" }}>
          <TimePicker />
          <TimePicker />
        </div>
        <div>
          {timeData().map((time) => (
            <div
              style={{
                padding: "0.5rem 1rem",
                borderBottom: "1px solid #d9d9d9",
              }}
            >
              {time}
            </div>
          ))}
        </div>
      </div>
    ),
  },
];

const IndCfg = () => {
  return (
    <IndCfgBlock>
      <BreadCrumb
        indicator={[
          {
            name: "홈",
            url: `/`,
          },
          {
            name: "자재업체관리",
            url: `/dcode/dcode`,
          },
          { name: "자재업체 코드관리", url: "" },
        ]}
      />
      <Title title={"자재업체 코드관리"} />
      <Tabs items={tabs} />
    </IndCfgBlock>
  );
};

export default IndCfg;
