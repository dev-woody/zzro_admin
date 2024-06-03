import { BaseBlock, BreadCrumb, Button, Description, Title } from "lib/styles";
import { DescriptionBlock } from "lib/styles/description/description";
import styled from "styled-components";

const ClientRegiBlock = styled(BaseBlock)``;

const basicInfo = [
  {
    label: "승인상태",
    content: "승인",
  },
  {
    label: "아이디",
    content: "승인",
  },
  {
    label: "비밀번호",
    content: "승인",
  },
  {
    label: "지역",
    content: "승인",
  },
  {
    label: "업체명",
    content: "승인",
  },
  {
    label: "담당자명 / 직급",
    content: "승인",
  },
  {
    label: "담당자 연락처",
    content: "승인",
  },
  {
    label: "담당자 이메일",
    content: "승인",
  },
  {
    label: "팩스번호",
    content: "승인",
  },
];

const ClientRegister = () => {
  return (
    <ClientRegiBlock>
      <BreadCrumb
        indicator={[
          {
            name: "홈",
            url: `/`,
          },
          {
            name: "시공업체관리",
            url: ``,
          },
          { name: "시공업체현황", url: "/client/client_list" },
          { name: "시공업체등록", url: "" },
        ]}
      />
      <Title title={"시공업체등록"} />
      <div style={{ display: "flex" }}>
        <div>
          <Description data={basicInfo} />
        </div>
        <div>
          <Description data={basicInfo} />
        </div>
      </div>
      <div style={{ display: "flex", margin: "0 auto" }}>
        <Button status="primary">저장</Button>
        <Button status="error">취소</Button>
      </div>
    </ClientRegiBlock>
  );
};

export default ClientRegister;
