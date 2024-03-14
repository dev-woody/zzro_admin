import { BaseBlock, BreadCrumb, Button, Table, Tag, Title } from "lib/styles";
import styled from "styled-components";
import { FaLink } from "react-icons/fa";

const BanefitNotiBlock = styled(BaseBlock)``;

const categoryData = [
  {
    num: 1,
    sended_At: "0313 수 10:00",
    receive: "스타키움_해빛디자인",
    send_kind: "무통장 입금확인",
    content: "무통장 입금이 확인되었습니다. 배송을 준비합니다.",
  },
];

const BanefitNoti = () => {
  const goodsColumns = [
    {
      title: "번호",
      dataIndex: "num",
    },
    {
      title: "전송일시",
      dataIndex: "sended_At",
    },
    {
      title: "수신인",
      dataIndex: "receive",
    },
    {
      title: "발신종류",
      dataIndex: "send_kind",
      render: () => <Tag color="info" text="SMS" />,
    },
    {
      title: "내용",
      dataIndex: "content",
      style: { width: "50%" },
    },
  ];

  return (
    <BanefitNotiBlock>
      <BreadCrumb
        indicator={[
          {
            name: "홈",
            url: `/`,
          },
          {
            name: "APP관리",
            url: ``,
          },
          { name: "혜택 정보알림", url: "" },
        ]}
      />
      <Title title={"혜택 정보알림"} />
      <Table columns={goodsColumns} content={categoryData} />
    </BanefitNotiBlock>
  );
};

export default BanefitNoti;
