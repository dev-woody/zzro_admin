import { BaseBlock, BreadCrumb, Table, Tag, Title, Select } from "lib/styles";
import styled from "styled-components";

const InquiryListBlock = styled(BaseBlock)``;

const testList = [{ name: "테스트", id: "test" }];

const categoryFilter = [
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
    title: "문의 제목",
    writer: "홍길동",
    status: true,
    created_at: "2024.03.11",
    hits: 10,
  },
];

const InquiryList = () => {
  const goodsColumns = [
    {
      title: "번호",
      dataIndex: "index",
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
      title: "답변상태",
      dataIndex: "status",
      render: (visible: string) =>
        visible ? (
          <Tag color="info" text="답변완료" />
        ) : (
          <Tag color="error" text="답변대기" />
        ),
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
    <InquiryListBlock>
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
          { name: "1:1 문의", url: "" },
        ]}
      />
      <Title title={"1:1 문의"} />
      <Table.Filter
        columns={goodsColumns}
        content={categoryData}
        filter={categoryFilter}
      />
    </InquiryListBlock>
  );
};

export default InquiryList;
