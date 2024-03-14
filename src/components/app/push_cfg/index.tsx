import { BaseBlock, BreadCrumb, Button, Table, Tag, Title } from "lib/styles";
import styled from "styled-components";

const PushCfgBlock = styled(BaseBlock)``;

const categoryData = [
  {
    sort: "발주요청완료",
    send_trigger: "발주요청 등록시점",
    title: "발주요청완료",
    content: "요청하신 발주서가 자재로 관리자에게 요청되었습니다.",
  },
];

const PushCfg = () => {
  const goodsColumns = [
    {
      title: "구분",
      dataIndex: "sort",
    },
    {
      title: "전송시점",
      dataIndex: "send_trigger",
    },
    {
      title: "제목",
      dataIndex: "title",
      style: { width: "20%" },
    },
    // ! input으로 변경
    {
      title: "내용",
      dataIndex: "content",
      style: { width: "50%" },
    },
    {
      title: "저장",
      dataIndex: "btn",
      render: () => <Button status="primary">수정</Button>,
    },
  ];

  return (
    <PushCfgBlock>
      <BreadCrumb
        indicator={[
          {
            name: "홈",
            url: `/`,
          },
          {
            name: "APP관리",
            url: ``,
          },
          { name: "PUSH 알림설정", url: "" },
        ]}
      />
      <Title title={"PUSH 알림설정"} />
      <Table columns={goodsColumns} content={categoryData} />
    </PushCfgBlock>
  );
};

export default PushCfg;
