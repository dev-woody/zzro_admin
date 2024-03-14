import {
  BaseBlock,
  BreadCrumb,
  Button,
  Input,
  Select,
  Table,
  Title,
} from "lib/styles";
import styled from "styled-components";
import { FaLink } from "react-icons/fa";

const PushListBlock = styled(BaseBlock)``;

const testList = [{ name: "테스트", id: "test" }];

const pushFilter = [
  {
    title: "전송구분",
    filterSource: (
      <Select
        placeholder="목록 수"
        optionList={testList}
        actions={(id: string) => console.log(id)}
      />
    ),
    style: { width: "100%" },
  },
  {
    title: "발주번호",
    filterSource: (
      <Input
        placeholder="목록 수"
        optionList={testList}
        actions={(id: string) => console.log(id)}
        register={() => console.log()}
      />
    ),
  },
  {
    title: "목록 수",
    filterSource: (
      <Select
        placeholder="목록 수"
        optionList={testList}
        actions={(id: string) => console.log(id)}
      />
    ),
  },
];

const categoryData = [
  {
    num: 1,
    receive: "스타키움_해빛디자인",
    send_kind: "무통장 입금확인",
    sended_At: "0313 수 10:00",
    title: "무통장 입금확인",
    content: "무통장 입금이 확인되었습니다. 배송을 준비합니다.",
    attempt_send: 1,
    success_send: 1,
  },
];

const PushList = () => {
  const goodsColumns = [
    {
      title: "번호",
      dataIndex: "num",
    },
    {
      title: "수신",
      dataIndex: "receive",
    },
    {
      title: "전송구분",
      dataIndex: "send_kind",
    },
    {
      title: "연결",
      dataIndex: "btn",
      render: () => (
        <Button status="primary">
          <FaLink />
        </Button>
      ),
    },
    {
      title: "전송일시",
      dataIndex: "sended_At",
    },
    {
      title: "제목",
      dataIndex: "title",
    },
    {
      title: "내용",
      dataIndex: "content",
      style: { width: "40%" },
    },
    {
      title: "전송시도",
      dataIndex: "attempt_send",
    },
    {
      title: "전송성공",
      dataIndex: "success_send",
    },
  ];

  return (
    <PushListBlock>
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
          { name: "PUSH 알림내역", url: "" },
        ]}
      />
      <Title title={"PUSH 알림내역"} />
      <Table.Filter
        columns={goodsColumns}
        content={categoryData}
        filter={pushFilter}
      />
    </PushListBlock>
  );
};

export default PushList;
