import { BaseBlock, BreadCrumb, Button, Table, Tag, Title } from "lib/styles";
import styled from "styled-components";

const BannerListBlock = styled(BaseBlock)``;

const categoryData = [
  {
    index: 1,
    image: "https://d2v80xjmx68n4w.cloudfront.net/gigs/jjJKi1663233147.jpg",
    link_sort: "공지사항",
    link_detail: "자재로 X 삼성카드 프로모션",
    show_sotr: true,
    title: "자재로 관리자 모드와 연동",
    writer: "자재로",
    created_at: "2024.03.11",
  },
];

const BannerList = () => {
  const goodsColumns = [
    {
      title: "번호",
      dataIndex: "index",
    },
    {
      title: "이미지",
      dataIndex: "image",
      render: (image: string) => {
        return <img src={image} alt="news_image" />;
      },
    },
    {
      title: "링크구분",
      dataIndex: "link_sort",
    },
    {
      title: "링크상세",
      dataIndex: "link_detail",
    },
    {
      title: "노출구분",
      dataIndex: "show_sort",
      render: (show_sort: boolean) =>
        show_sort ? (
          <Tag color="info" text="노출" />
        ) : (
          <Tag color="error" text="미노출" />
        ),
    },
    {
      title: "작성자",
      dataIndex: "writer",
    },
    {
      title: "작성일시",
      dataIndex: "created_at",
    },
    {
      title: "수정",
      dataIndex: "modify",
      render: () => <Button status="primary">수정</Button>,
    },
  ];

  return (
    <BannerListBlock>
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
          { name: "", url: "" },
        ]}
      />
      <Title title={"App 배너관리"} />
      <Table columns={goodsColumns} content={categoryData} />
    </BannerListBlock>
  );
};

export default BannerList;
