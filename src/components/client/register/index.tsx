import { BaseBlock, BreadCrumb, Description, Title } from "lib/styles";
import { DescriptionBlock } from "lib/styles/description/description";
import styled from "styled-components";

const ClientRegiBlock = styled(BaseBlock)``;

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
          <DescriptionBlock>
            {/* <Description></Description> */}
          </DescriptionBlock>
        </div>
        <div></div>
      </div>
    </ClientRegiBlock>
  );
};

export default ClientRegister;
