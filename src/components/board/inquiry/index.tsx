import {
  BaseBlock,
  BreadCrumb,
  Button,
  Modal,
  Radio,
  Checkbox,
  StyledForm,
  StyledInput,
  Table,
  Tag,
  Title,
  StyledSelect,
} from "lib/styles";
import { useState } from "react";
import styled from "styled-components";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { GetProp } from "types/globalTypes";
import { CheckboxProps } from "lib/styles/checkBox";
import { RadioChangeEvent } from "lib/styles/radio/interface";

type CheckboxValueType = GetProp<typeof Checkbox.Group, "value">[number];

const GoodsListBlock = styled(BaseBlock)``;

const testList = [{ name: "테스트", id: "test" }];

const categoryFilter = [
  {
    title: "검색",
    filterSource: (
      <StyledSelect
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
      <StyledSelect
        placeholder="목록 수"
        optionList={testList}
        actions={(id: string) => console.log(id)}
      />
    ),
  },
  {
    title: "목록 수",
    filterSource: (
      <StyledSelect
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

const schema1st = yup.object({
  ctg_name: yup.string().required("카테고리명을 입력해주세요."),
  password: yup.string().required("비밀번호를 입력해주세요."),
});

const Categort1st = () => {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting, errors },
  } = useForm({
    resolver: yupResolver(schema1st),
    defaultValues: {
      ctg_name: "",
      password: "",
    },
  });

  const [value, setValue] = useState(1);
  const onChange = (e: RadioChangeEvent) => {
    console.log("radio checked", e.target.value);
    setValue(e.target.value);
  };

  return (
    <StyledForm>
      <StyledInput
        placeholder="카테고리명"
        width="full"
        label="ctg_name"
        register={register}
        errors={errors}
        status={errors.ctg_name}
      />
      <Radio.Group name="radiogroup">
        <Radio name="select" value={1}>
          선택
        </Radio>
        <Radio name="select" value={2}>
          미선택
        </Radio>
      </Radio.Group>
    </StyledForm>
  );
};

const InquiryList = () => {
  const [modalVisible, setModalVisible] = useState<boolean>(false);

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
    <GoodsListBlock>
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
      <Modal
        title="제품분류"
        msg={<Categort1st />}
        // submitMsg="확인"
        // cancelMsg="취소"
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
      />
    </GoodsListBlock>
  );
};

export default InquiryList;
