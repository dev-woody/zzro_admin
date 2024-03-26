import {
  BaseBlock,
  BreadCrumb,
  Button,
  Select,
  Table,
  Tag,
  Title,
} from "lib/styles";
import styled from "styled-components";
import { FaPlus } from "react-icons/fa6";
import { approveList, localList } from "lib/columns/list";
import { Link } from "react-router-dom";

const pageNumList = [
  { name: "20명", id: "20명" },
  { name: "50명", id: "50명" },
  { name: "100명", id: "100명" },
];

const ClientBlock = styled(BaseBlock)`
  width: 100%;
`;

type ColumnsType = {
  title: string;
  dataIndex: string;
  isCheck?: boolean;
  isDesc?: boolean;
  render?: (
    data?: any,
    list?: any,
    index?: number
  ) => JSX.Element | string | number | undefined;
};

const filterItem = [
  {
    title: "지역별 조회",
    filterSource: (
      <Select
        placeholder="지역별 조회"
        optionList={localList}
        actions={(id: string) => console.log(id)}
      />
    ),
  },
  {
    title: "승인상태",
    filterSource: (
      <Select
        placeholder="승인상태"
        optionList={approveList}
        actions={(id: string) => console.log(id)}
      />
    ),
  },
  {
    title: "목록 수",
    filterSource: (
      <Select
        placeholder="목록 수"
        optionList={pageNumList}
        actions={(id: string) => console.log(id)}
      />
    ),
  },
  {
    title: "",
    filterSource: null,
  },
];

const deliveryCodeColumns: ColumnsType[] = [
  {
    title: "번호",
    dataIndex: "",
    render: (_, __, index) => index,
  },
  {
    title: "승인",
    dataIndex: "approval",
    render: (approval) =>
      approval === "승인" ? (
        <Tag text={approval} color="info" />
      ) : (
        <Tag text={approval} color="error" />
      ),
  },
  {
    title: "지역",
    dataIndex: "area",
  },
  {
    title: "업체명",
    dataIndex: "com_name",
  },
  {
    title: "아이디",
    dataIndex: "com_id",
  },
  {
    title: "사업자번호",
    dataIndex: "com_num",
  },
  {
    title: "사업장주소",
    dataIndex: "com_addr",
  },
  {
    title: "담당자명 (연락처)",
    dataIndex: "com_mobile",
  },
  {
    title: "가입일",
    dataIndex: "created_at",
  },
];

const ClientList = () => {
  let data = [
    {
      approval: "승인",
      area: "서울",
      com_name: "한샘리하우스 더미르대리점",
      com_id: "12345678",
      com_num: "808-40-12345",
      com_addr: "인천 부평구 수변로 334 (삼산동, 신성미소지움아파트)",
      com_mobile: "홍길동(010-1234-5678)",
      created_at: "2023-12-05",
    },
  ];

  for (let i = 0; i < 20; i++) {
    data.push({
      approval: "승인",
      area: i + "지역",
      com_name: i + "회사명",
      com_id: i + "아이디",
      com_num: i + "사업자번호",
      com_addr: i + "사업장주소",
      com_mobile: i + "휴대전화번호",
      created_at: new Date().getDate().toString(),
    });
  }

  return (
    <ClientBlock>
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
          { name: "시공업체현황", url: "" },
        ]}
      />
      <Title
        title={"시공업체현황"}
        extra={
          <Link to={"register"}>
            <Button status="primary">
              <FaPlus />
              &nbsp;시공업체 등록
            </Button>
          </Link>
        }
      />
      <Table.Filter
        columns={deliveryCodeColumns}
        content={data}
        // filter
        // isSearch
        // filterInput={"안녕"}
        pagenation
        filter={filterItem}
      />
    </ClientBlock>
  );
};

export default ClientList;
