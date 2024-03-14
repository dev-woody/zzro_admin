import { BaseBlock, BreadCrumb, Radio, Table, Title, Select } from "lib/styles";
import styled from "styled-components";

const FaqListBlock = styled(BaseBlock)``;

const testList = [{ name: "테스트", id: "test" }];

const categoryFilter = [
  {
    title: "공개여부",
    filterSource: (
      <Radio.Group name="radiogroup">
        <Radio name="select" value={1}>
          전체
        </Radio>
        <Radio name="select" value={2}>
          공개
        </Radio>
        <Radio name="select" value={3}>
          비공개
        </Radio>
      </Radio.Group>
    ),
  },
  {
    title: "검색",
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
    title: "정렬",
    filterSource: (
      <Select
        placeholder="목록 수"
        optionList={testList}
        actions={(id: string) => console.log(id)}
        style={{ width: "100px" }}
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
    index: 1,
    visible: true,
    title: "자재로는 어떤 물건을 취급하나요?",
    writer: "자재로",
    created_at: "2024.03.11",
    hits: 10,
  },
];

const FaqList = () => {
  const goodsColumns = [
    {
      title: "번호",
      dataIndex: "index",
    },
    {
      title: "공개여부",
      dataIndex: "visible",
      render: (visible: string) => (visible ? "공개" : "미공개"),
    },
    {
      title: "제목",
      dataIndex: "title",
      style: { width: "50%" },
    },
    {
      title: "작성자",
      dataIndex: "writer",
    },
    {
      title: "작성일시",
      dataIndex: "created_at",
    },
    {
      title: "조회수",
      dataIndex: "hits",
    },
  ];

  return (
    <FaqListBlock>
      <BreadCrumb
        indicator={[
          {
            name: "홈",
            url: `/`,
          },
          {
            name: "게시판 관리",
            url: ``,
          },
          { name: "자주묻는 질문", url: "" },
        ]}
      />
      <Title title={"자주묻는 질문"} />
      <Table.Filter
        columns={goodsColumns}
        content={categoryData}
        filter={categoryFilter}
      />
    </FaqListBlock>
  );
};

export default FaqList;
