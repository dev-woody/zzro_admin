import { sidebarList } from "lib/columns/sidebar";
import styled, { css } from "styled-components";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { FaAngleRight } from "react-icons/fa6";

interface ItemProps {
  disable?: boolean;
  isSelect?: boolean;
}

interface SideBarProps {
  visible: boolean;
  activeUrl: string[];
}

const SidebarBlock = styled.div<SideBarProps>`
  position: relative;
  padding: 0;
  width: 0;
  height: 100%;
  max-height: calc(100vh - 60px);
  overflow-y: scroll;
  overflow-x: hidden;
  background-color: #fff;
  transition: 0.3s;
  box-sizing: border-box;

  /* &.visible {
    padding: 10px 16px;
    width: 260px;
  } */

  ${(props) =>
    props.visible &&
    css`
      width: 260px;
    `}
`;

const SidebarOnOff = styled.div`
  width: 100%;
  padding: 10px 16px;
  overflow: hidden;
`;

const MenuGroup = styled.ul<{ itemList: any }>`
  margin: 0;
  padding: 0;
  color: #121926;
  width: calc(260px - 2rem);
  height: 42px;
  overflow: hidden;
  transition: 0.5s !important;
  margin: 2px 0;
  box-sizing: border-box;

  &.active {
    /* height: ${(props) => props.itemList}*46px; */
    height: calc(${(props) => props.itemList} * 46px + 42px);
  }
`;

const GroupTitle = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 0.875rem;
  font-weight: 700;
  color: #121926;
  padding: 10px 16px;
  border-radius: 0.75rem;
  line-height: 1.5rem;
  height: 42px;
  box-sizing: border-box;

  & .selectArrow {
    display: flex;
    justify-content: center;
    align-items: center;
    transition: 0.3s;
  }

  &:hover {
    cursor: pointer;
    background-color: ${(props) => props.theme.colors.primary};
    color: #fff;

    & .selectArrow > * {
      color: #fff;
      transition: 0s !important;
    }
  }

  &.selected {
    background-color: ${(props) => props.theme.colors.primary};
    color: #fff;

    & svg {
      color: #fff;
    }

    & .selectArrow > * {
      color: #fff;
      transition: 0s !important;
    }
  }

  &.active {
    background-color: ${(props) => props.theme.colors.primary};
    color: #fff;

    & svg {
      color: #fff;
    }

    & .selectArrow {
      rotate: 90deg;
      transition: 0.3s;
      & .selectArrow > * {
        transition: 0s !important;
      }
    }

    & .selectArrow > * {
      color: #fff;
      transition: 0s !important;
    }
  }
`;

const Items = styled.div<ItemProps>`
  font-weight: 300;
  text-align: center;
  height: 42px;
  min-height: 26px;
  color: #364152;
  padding: 10px 16px 10px 24px;
  position: relative;
  display: flex;
  align-items: center;
  overflow: hidden;
  text-overflow: ellipsis;
  box-sizing: border-box;

  & > div {
    font-size: 0.875rem;
    font-weight: 400;
  }

  &:hover {
    cursor: pointer;
    & > div {
      color: ${(props) => props.theme.colors.primary};
    }
  }

  ${(props) =>
    props.disable &&
    css`
      color: #333 !important;

      &:hover {
        cursor: not-allowed;
        & > div {
          background-color: inherit !important;
          color: #333 !important;
        }
      }
    `}

  ${(props) =>
    props.isSelect &&
    css`
      & > div {
        font-weight: bold;
        color: ${(props) => props.theme.colors.primary};
      }
      & svg {
        color: ${(props) => props.theme.colors.primary};
      }
    `}
`;

const IconBlock = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 20px;
  margin-right: 10px;
`;

const Sidebar = ({ activeUrl, visible }: SideBarProps) => {
  const navigate = useNavigate();
  const nowURL = window.location.pathname;
  const [isOpen, setIsOpen] = useState<string>();
  const [isSelect, setIsSelect] = useState<string>();
  const mainMenu = window.location.pathname;
  useEffect(() => {
    for (let i = 0; i < sidebarList.length; i++) {
      if (mainMenu.startsWith(sidebarList[i].url)) {
        setIsSelect(sidebarList[i].name);
        setIsOpen(sidebarList[i].name);
      }
    }
  }, [mainMenu]);
  return (
    <SidebarBlock visible={visible} activeUrl={activeUrl}>
      <SidebarOnOff>
        {sidebarList.map((list) => {
          const active = list.name === isOpen ? "active" : "";
          const selected = list.name === isSelect ? "selected" : "";
          return (
            <MenuGroup
              key={list.name}
              className={active}
              itemList={list?.children?.length}
            >
              <GroupTitle
                className={"title " + selected + " " + active}
                onClick={() => {
                  if (isOpen === list.name) {
                    setIsOpen("");
                  } else {
                    setIsOpen(list.name);
                  }
                }}
              >
                <div style={{ display: "flex" }}>
                  <IconBlock>{list.icon}</IconBlock>
                  {list.name}
                </div>
                <div className="selectArrow">
                  <FaAngleRight />
                </div>
              </GroupTitle>
              {list.children?.map((subMenu, index) => {
                const SubMenuUrl = list.url + subMenu.url;
                const urlArray = [
                  SubMenuUrl.split("/")[1],
                  SubMenuUrl.split("/")[2],
                ];
                if (subMenu?.disable) {
                  return (
                    <Items key={index} disable={subMenu.disable}>
                      {subMenu.icon ? (
                        <IconBlock>{subMenu.icon}</IconBlock>
                      ) : null}
                      <div>{subMenu.menuName}</div>
                    </Items>
                  );
                } else
                  return (
                    <Items
                      key={index}
                      onClick={() => {
                        if (nowURL === `${list.url}${subMenu.url}`) {
                          navigate(`${list.url}${subMenu.url}`);
                          navigate(0);
                        } else {
                          navigate(`${list.url}${subMenu.url}`);
                        }
                      }}
                      isSelect={
                        activeUrl[0] === urlArray[0] &&
                        activeUrl[1] === urlArray[1]
                          ? true
                          : false
                      }
                    >
                      <div style={{ paddingLeft: "20px" }}>
                        {subMenu.menuName}
                      </div>
                    </Items>
                  );
              })}
              {/* <hr style={{ border: "0.75px solid #e3e8ef" }} /> */}
            </MenuGroup>
          );
        })}
      </SidebarOnOff>
    </SidebarBlock>
  );
};

export default Sidebar;
