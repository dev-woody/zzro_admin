import { Dispatch, SetStateAction } from "react";
import styled from "styled-components";
import { FaBars } from "react-icons/fa";
import { Link } from "react-router-dom";

interface headerProps {
  visible: boolean;
  setVisible: Dispatch<SetStateAction<boolean>>;
}

const HeaderBlock = styled.div`
  max-width: 100%;
  background: ${(props) => props.theme.colors.primary};
  height: 60px;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const LeftArea = styled.div`
  display: flex;
  width: 260px;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  box-sizing: border-box;
`;

const SidebarBtn = styled.button`
  border: 0;
  height: 40px;
  width: 40px;
  border-radius: 0.75rem;
  overflow: hidden;
  padding-bottom: 0.25rem;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    cursor: pointer;
  }
`;

const Header = ({ visible, setVisible }: headerProps) => {
  return (
    <HeaderBlock>
      <LeftArea>
        <Link to="/" style={{ color: "#fff" }}>
          자재로 발주 솔루션
        </Link>
        <SidebarBtn onClick={() => setVisible(!visible)}>
          <FaBars />
        </SidebarBtn>
      </LeftArea>
      <div style={{ marginRight: "20px" }}>회원정보</div>
    </HeaderBlock>
  );
};

export default Header;
