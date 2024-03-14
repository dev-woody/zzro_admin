import {
  BaseBlock,
  BreadCrumb,
  Button,
  Input,
  Select,
  Table,
  Title,
} from "lib/styles";
import { FaPlus } from "react-icons/fa";
import styled from "styled-components";
import { approveList, localList } from "lib/columns/list";
import { ColumnsType } from "lib/columns/sidebar";

import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { Link } from "react-router-dom";

const ClientWorkBlock = styled(BaseBlock)``;

const deliveryCodeColumns: ColumnsType[] = [
  {
    title: "번호",
    dataIndex: "",
    render: (_, __, index) => index,
  },
  {
    title: "시공업체",
    dataIndex: "area",
  },
  {
    title: "공사명",
    dataIndex: "com_name",
  },
  {
    title: "신규발주",
    dataIndex: "com_id",
    render: () => (
      <Button status="success">
        <FaPlus />
      </Button>
    ),
  },
  {
    title: "발주합계",
    dataIndex: "com_num",
  },
  {
    title: "발주서작성중",
    dataIndex: "com_mobile",
  },
  {
    title: "발주신청",
    dataIndex: "created_at",
  },
  {
    title: "발주검수중",
    dataIndex: "created_at",
  },
  {
    title: "발주수정",
    dataIndex: "created_at",
  },
  {
    title: "결제대기",
    dataIndex: "created_at",
  },
  {
    title: "결제완료",
    dataIndex: "created_at",
  },
  {
    title: "배송대기",
    dataIndex: "created_at",
  },
  {
    title: "배송진행",
    dataIndex: "created_at",
  },
  {
    title: "배송완료",
    dataIndex: "created_at",
  },
  {
    title: "취소합계",
    dataIndex: "created_at",
  },
  {
    title: "반품대기",
    dataIndex: "created_at",
  },
  {
    title: "반품진행",
    dataIndex: "created_at",
  },
  {
    title: "반품완료",
    dataIndex: "created_at",
  },
  {
    title: "환불대기",
    dataIndex: "created_at",
  },
  {
    title: "환불완료",
    dataIndex: "created_at",
  },
  {
    title: "주문취소",
    dataIndex: "created_at",
  },
];

const schema = yup.object({
  userId: yup.string().required("아이디를 입력해주세요."),
  password: yup.string().required("비밀번호를 입력해주세요."),
});

const filterSource = [
  {
    title: "시공업체명",
    filterSource: (
      <Select
        placeholder="시공업체"
        optionList={localList}
        actions={(id: string) => console.log(id)}
      />
    ),
  },
  {
    title: "",
    filterSource: null,
  },
];

const ClientWorkList = () => {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting, errors },
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      userId: "",
      password: "",
    },
  });
  let data = [];
  for (let i = 0; i < 20; i++) {
    data.push({
      approval: "승인",
      area: i + "지역",
      com_name: i + "회사명",
      com_id: i + "아이디",
      com_num: i + "사업자번호",
      com_mobile: i + "휴대전화번호",
      created_at: new Date().getDate(),
    });
  }

  return (
    <ClientWorkBlock>
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
          { name: "공사현황", url: "" },
        ]}
      />
      <Title
        title={"공사현황"}
        extra={
          <Button status="primary">
            <FaPlus />
            &nbsp;신규공사 등록
          </Button>
        }
      />
      <Table.Filter
        columns={deliveryCodeColumns}
        content={data}
        filter={filterSource}
        // isSearch
        // filterInput={"안녕"}
        pagenation
        // filterInput={
        //   <Select
        //     placeholder="시공업체"
        //     optionList={localList}
        //     actions={(id: string) => console.log(id)}
        //   />
        // }
      />
    </ClientWorkBlock>
  );
};

export default ClientWorkList;
