import { useState } from "react";
import styled from "styled-components";

interface TabsProps {
  key: number;
  label: string;
  children: JSX.Element;
}

const TabsBlock = styled.div``;

const TabTagBox = styled.ol`
  display: flex;
  border-bottom: 2px solid var(--cus-color-border);
  margin-bottom: 1rem;
`;

const TabTag = styled.li`
  padding: 1rem 1rem;
  color: var(--cus-color-text-tertiary);
  border-bottom: 2px solid var(--cus-color-border);
  margin-bottom: -2px;

  &:hover {
    cursor: pointer;
  }

  &.active {
    font-weight: bold;
    color: var(--cus-color-primary-text);
    border-bottom: 2px solid var(--cus-color-primary-text);
  }
`;

const Tabs = ({ items }: { items: TabsProps[] }) => {
  const [selectedTab, setSelectedTab] = useState<number>();
  const [selectedChildren, setSelectedChildren] = useState<JSX.Element>();

  const onSetSelectedTab = (item: TabsProps) => {
    setSelectedTab(item.key);
    setSelectedChildren(item.children);
  };

  return (
    <TabsBlock>
      <TabTagBox>
        {items.map((item) => (
          <TabTag
            className={selectedTab === item.key ? "active" : ""}
            onClick={() => onSetSelectedTab(item)}
          >
            {item.label}
          </TabTag>
        ))}
      </TabTagBox>
      <div>{selectedChildren}</div>
    </TabsBlock>
  );
};

export default Tabs;
