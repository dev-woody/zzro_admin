import {
  BaseBlock,
  BreadCrumb,
  Modal,
  Radio,
  Checkbox,
  StyledForm,
  Input,
  Table,
  Tag,
  Title,
  Select,
} from "lib/styles";
import { useState } from "react";
import styled from "styled-components";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { RadioChangeEvent } from "lib/styles/radio/interface";

const GoodsListBlock = styled(BaseBlock)``;

const testList = [{ name: "테스트", id: "test" }];

const categoryFilter = [
  {
    title: "카테고리",
    filterSource: (
      <div style={{ display: "flex" }}>
        <Select
          placeholder="목록 수"
          optionList={testList}
          actions={(id: string) => console.log(id)}
          style={{ marginRight: "0.5rem", width: "100px" }}
        />
        <Select
          placeholder="목록 수"
          optionList={testList}
          actions={(id: string) => console.log(id)}
          style={{ marginRight: "0.5rem", width: "100px" }}
        />
        <Select
          placeholder="목록 수"
          optionList={testList}
          actions={(id: string) => console.log(id)}
          style={{ width: "100px" }}
        />
      </div>
    ),
  },
  {
    title: "진열상태",
    filterSource: (
      <Radio.Group name="radiogroup">
        <Radio name="select" value={1}>
          전체
        </Radio>
        <Radio name="select" value={2}>
          진열
        </Radio>
        <Radio name="select" value={3}>
          미진열
        </Radio>
      </Radio.Group>
    ),
  },
  {
    title: "자재명",
    filterSource: (
      <Select
        placeholder="목록 수"
        optionList={testList}
        actions={(id: string) => console.log(id)}
      />
    ),
  },
  {
    title: "자재업체",
    filterSource: (
      <Select
        placeholder="목록 수"
        optionList={testList}
        actions={(id: string) => console.log(id)}
      />
    ),
  },
  {
    title: "연동상태",
    filterSource: (
      <Radio.Group name="radiogroup">
        <Radio name="select" value={1}>
          전체
        </Radio>
        <Radio name="select" value={2}>
          연동
        </Radio>
        <Radio name="select" value={3}>
          미연동
        </Radio>
      </Radio.Group>
    ),
  },
  {
    title: "",
    filterSource: null,
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

  const [value, setValue] = useState(1);
  const onChange = (e: RadioChangeEvent) => {
    console.log("radio checked", e.target.value);
    setValue(e.target.value);
  };

  return (
    <StyledForm>
      <Input
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

const GoodsList = () => {
  const [modalVisible, setModalVisible] = useState<boolean>(false);

  const goodsColumns = [
    {
      title: "",
      dataIndex: "index",
      render: () => <Checkbox />,
      isCheck: true,
    },
    {
      title: "납품가",
      dataIndex: "num",
    },
    {
      title: "번호",
      dataIndex: "ctg_name",
    },
    {
      title: "이미지",
      dataIndex: "use_num",
    },
    {
      title: "카테고리/자제명",
      dataIndex: "showYn",
      render: (showYn: boolean) =>
        showYn ? (
          <Tag color="success" text="공개" />
        ) : (
          <Tag color="error" text="비공개" />
        ),
      width: "30%",
    },
    {
      title: "",
      dataIndex: "edit_1st",
      render: () => <Checkbox />,
      isCheck: true,
    },
    {
      title: "진열",
      dataIndex: "edit_2nd",
      render: (showYn: boolean) =>
        showYn ? (
          <Tag color="success" text="진열" />
        ) : (
          <Tag color="error" text="미진열" />
        ),
    },
    {
      title: "자재안내",
      dataIndex: "sort_2nd",
    },
    {
      title: "판매가",
      dataIndex: "sort_2nd",
    },
    {
      title: "판매업체",
      dataIndex: "sort_2nd",
    },
    {
      title: "등록수정",
      dataIndex: "sort_2nd",
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
            name: "자재관리",
            url: ``,
          },
          { name: "카테고리 설정", url: "" },
        ]}
      />
      <Title title={"카테고리 설정"} />
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

export default GoodsList;
