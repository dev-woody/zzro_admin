import styled from "styled-components";
import Header from "./header";
import Sidebar from "./sidebar";
import { useState } from "react";
import { Outlet } from "react-router-dom";

const LayoutBlock = styled.div`
  height: 100vh;
  max-width: 100vw;
`;

const Content = styled.div`
  height: calc(100vh - 60px);
  width: 100vw;
  display: flex;
  overflow-y: hidden;
  background-color: #eef2f6;
`;

const Section = styled.div`
  /* position: relative; */
  flex-grow: 1;
  /* display: flex; */
  flex-wrap: wrap;
  flex-direction: column;
  width: calc(100% - 260px);
  max-height: calc(100vh - 60px);
  box-sizing: border-box;
  overflow-x: hidden;
  overflow-y: scroll;
  padding: 20px;
`;

const Layout = () => {
  const [visible, setVisible] = useState<boolean>(true);
  const [url, setUrl] = useState<string[]>([]);
  return (
    <LayoutBlock>
      <Header visible={visible} setVisible={setVisible} />
      <Content>
        <Sidebar visible={visible} activeUrl={url} />
        <Section>
          <Outlet />
        </Section>
      </Content>
    </LayoutBlock>
  );
};

export default Layout;
