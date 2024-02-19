import {
  BaseBlock,
  BreadCrumb,
  Button,
  Modal,
  Radio,
  StyledForm,
  StyledInput,
  Table,
  Tag,
  Title,
} from "lib/styles";
import { useState } from "react";
import styled from "styled-components";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

const GoodsCategoryBlock = styled(BaseBlock)``;

const categoryData = [
  {
    index: 1,
    num: 1,
    ctg_name: "테스트",
    use_num: 10,
    showYn: true,
    edit_1st: "",
    edit_2nd: "",
    sort_2nd: 10,
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
      <label>
        <Radio text="선택" name="select" />
      </label>
      <label>
        <Radio text="미선택" name="select" />
      </label>
    </StyledForm>
  );
};

const GoodsCategory = () => {
  const [modalVisible, setModalVisible] = useState<boolean>(false);

  const CategotyColumns = [
    {
      title: "순서",
      dataIndex: "index",
    },
    {
      title: "번호",
      dataIndex: "num",
    },
    {
      title: "카테고리명",
      dataIndex: "ctg_name",
    },
    {
      title: "사용횟수",
      dataIndex: "use_num",
    },
    {
      title: "공개여부",
      dataIndex: "showYn",
      render: (showYn: boolean) =>
        showYn ? (
          <Tag color="success" text="공개" />
        ) : (
          <Tag color="error" text="비공개" />
        ),
    },
    {
      title: "1차 카테고리 수정",
      dataIndex: "edit_1st",
      render: () => (
        <Button onClick={() => setModalVisible(true)}>1차 카테고리 수정</Button>
      ),
    },
    {
      title: "2차 카테고리 수정",
      dataIndex: "edit_2nd",
      render: () => <Button>2차 카테고리 설정</Button>,
    },
    {
      title: "2차 카테고리 분류갯수",
      dataIndex: "sort_2nd",
    },
  ];

  return (
    <GoodsCategoryBlock>
      <BreadCrumb
        indicator={[
          {
            name: "홈",
            url: `/`,
          },
          {
            name: "자재관리",
            url: ``,
          },
          { name: "카테고리 설정", url: "" },
        ]}
      />
      <Title title={"카테고리 설정"} />
      <Table columns={CategotyColumns} content={categoryData} />
      <Modal
        title="제품분류"
        msg={<Categort1st />}
        // submitMsg="확인"
        // cancelMsg="취소"
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
      />
    </GoodsCategoryBlock>
  );
};

export default GoodsCategory;
