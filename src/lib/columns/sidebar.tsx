import {
  FaGear,
  FaHelmetSafety,
  FaIndustry,
  FaTruck,
  FaBox,
  FaMobile,
  FaTableList,
  FaChartLine,
} from "react-icons/fa6";

type sideListType = {
  icon?: any;
  name: string;
  url: string;
  children?: {
    icon?: any;
    menuName: string;
    url: string;
    disable?: boolean;
  }[];
};

export type ColumnsType = {
  title: string;
  dataIndex: string;
  isCheck?: boolean;
  isDesc?: boolean;
  render?: (
    data?: any,
    list?: any,
    index?: number
  ) => JSX.Element | string | number | undefined;
};

//* sidebarList
export const sidebarList: sideListType[] = [
  {
    icon: <FaGear />,
    name: "운영관리",
    url: "/dcode",
    children: [
      {
        menuName: "배송코드 관리",
        url: "/dcode",
      },
    ],
  },
  {
    icon: <FaHelmetSafety />,
    name: "시공업체관리",
    url: "/goods",
    children: [
      {
        menuName: "시공업체현황",
        url: "/spec",
      },
      {
        menuName: "공사현황",
        url: "/groups",
      },
      {
        menuName: "시공업체 코드관리",
        url: "/groups",
      },
    ],
  },
  {
    icon: <FaIndustry />,
    name: "자재업체관리",
    url: "/order",
    children: [
      {
        menuName: "자재업체 현황",
        url: "/allList",
      },
      {
        menuName: "자재업체 코드관리",
        url: "/beforePayment",
      },
    ],
  },
  {
    icon: <FaBox />,
    name: "자재관리",
    url: "/promotion",
    children: [
      {
        menuName: "카테고리설정",
        url: "/event",
        disable: true,
      },
      {
        menuName: "자재등록설정",
        url: "/event",
        disable: true,
      },
    ],
  },
  {
    icon: <FaTruck />,
    name: "발주관리",
    url: "/statistics",
    children: [
      {
        menuName: "매출분석",
        url: "/sales",
        disable: true,
      },
      {
        menuName: "상품분석",
        url: "/goods",
        disable: true,
      },
    ],
  },
  {
    icon: <FaTableList />,
    name: "게시판관리",
    url: "/payment",
    children: [
      {
        menuName: "자주묻는질문",
        url: "/calculate",
        disable: true,
      },
      {
        menuName: "1:1문의",
        url: "/sales",
        disable: true,
      },
      {
        menuName: "공지사항",
        url: "/sales",
        disable: true,
      },
      {
        menuName: "NEWS",
        url: "/sales",
        disable: true,
      },
    ],
  },
  {
    icon: <FaMobile />,
    name: "APP관리",
    url: "/notice",
    children: [
      {
        menuName: "배너관리",
        url: "/announcement",
        disable: true,
      },
      {
        menuName: "PUSH 알림설정",
        url: "/faq",
        disable: true,
      },
      {
        menuName: "PUSH 알림내역",
        url: "/faq",
        disable: true,
      },
      {
        menuName: "혜택 정보알림",
        url: "/faq",
        disable: true,
      },
      {
        menuName: "설치현황",
        url: "/faq",
        disable: true,
      },
      {
        menuName: "설치기기현황",
        url: "/faq",
        disable: true,
      },
    ],
  },
  {
    icon: <FaChartLine />,
    name: "통계",
    url: "/notice",
    children: [
      {
        menuName: "일별매출현황",
        url: "/announcement",
        disable: true,
      },
      {
        menuName: "월별매출현황",
        url: "/faq",
        disable: true,
      },
      {
        menuName: "자재별매출현황",
        url: "/faq",
        disable: true,
      },
      {
        menuName: "자재업체별매출현황",
        url: "/faq",
        disable: true,
      },
    ],
  },
];
