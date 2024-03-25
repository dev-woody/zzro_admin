import { BaseBlock, BreadCrumb, Button, Table, Tag, Title } from "lib/styles";
import styled from "styled-components";
import { FaPlus } from "react-icons/fa6";

const CustomerBlock = styled(BaseBlock)`
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

const CustomerList = () => {
  let data = [];
  for (let i = 0; i < 20; i++) {
    data.push({
      approval: "승인",
      area: i + "지역",
      com_name: i + "회사명",
      com_id: i + "아이디",
      com_num: i + "사업자번호",
      com_addr: i + "사업장주소",
      com_mobile: i + "휴대전화번호",
      created_at: new Date().getDate(),
    });
  }

  return (
    <CustomerBlock>
      <BreadCrumb
        indicator={[
          {
            name: "홈",
            url: `/`,
          },
          {
            name: "자제업체관리",
            url: `/dcode/dcode`,
          },
          { name: "자제업체현황", url: "" },
        ]}
      />
      <Title
        title={"자제업체현황"}
        extra={
          <Button status="success">
            <FaPlus />
            &nbsp;자제업체 등록
          </Button>
        }
      />
      <Table
        columns={deliveryCodeColumns}
        content={data}
        // filter
        // isSearch
        // filterInput={"안녕"}
        pagenation
        // filterInput={
        //   <>
        //     <Select
        //       placeholder="지역별 조회"
        //       optionList={localList}
        //       actions={(id: string) => console.log(id)}
        //     />
        //     <Select
        //       placeholder="승인상태"
        //       optionList={approveList}
        //       actions={(id: string) => console.log(id)}
        //     />
        //     <Select
        //       placeholder="목록 수"
        //       optionList={pageNumList}
        //       actions={(id: string) => console.log(id)}
        //     />
        //   </>
        // }
      />
    </CustomerBlock>
  );
};

export default CustomerList;
