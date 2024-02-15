import {
  BaseBlock,
  BreadCrumb,
  Button,
  StyledSearchInput,
  Table,
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
            name: "시공업체관리",
            url: `/dcode/dcode`,
          },
          { name: "탈퇴 코드관리", url: "" },
        ]}
      />
      <Title title={"탈퇴 코드관리"} />
      <Table columns={indColumn} content={indData} />
      <div
        style={{ display: "flex", alignItems: "center", margin: "0.5rem 0" }}
      >
        <span style={{ marginRight: "1rem" }}>회원탈퇴사유</span>
        <StyledSearchInput btnText="추가" />
      </div>
    </IndCfgBlock>
  );
};

export default IndCfg;
