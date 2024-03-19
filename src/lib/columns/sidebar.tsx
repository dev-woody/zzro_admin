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
        disable: true,
      },
    ],
  },
  {
    icon: <FaHelmetSafety />,
    name: "시공업체관리",
    url: "/client",
    children: [
      {
        menuName: "시공업체현황",
        url: "/client_list",
      },
      {
        menuName: "공사현황",
        url: "/client_work_list",
      },
      {
        menuName: "탈퇴 코드관리",
        url: "/ind_cfg",
      },
    ],
  },
  {
    icon: <FaIndustry />,
    name: "자재업체관리",
    url: "/customer",
    children: [
      {
        menuName: "자재업체 현황",
        url: "/customer_list",
      },
      {
        menuName: "자재업체 코드관리",
        url: "/ind_cfg",
      },
    ],
  },
  {
    icon: <FaBox />,
    name: "자재관리",
    url: "/goods",
    children: [
      {
        menuName: "카테고리설정",
        url: "/goods_category",
      },
      {
        menuName: "자재등록설정",
        url: "/goods_list",
      },
    ],
  },
  {
    icon: <FaTruck />,
    name: "발주관리",
    url: "/order",
    children: [
      {
        menuName: "발주검수중",
        url: "/ord_inspection",
      },
      {
        menuName: "발주수정",
        url: "/ord_modify",
      },
      {
        menuName: "결제대기",
        url: "/before_payment",
      },
      {
        menuName: "결제완료",
        url: "/after_payment",
      },
      {
        menuName: "배송대기",
        url: "/before_shipping",
      },
      {
        menuName: "배송진행",
        url: "/ord_shipping",
      },
      {
        menuName: "배송완료",
        url: "/after_shipping",
      },
      {
        menuName: "반품대기",
        url: "/before_return",
      },
      {
        menuName: "반품진행",
        url: "/ord_return",
      },
      {
        menuName: "반품완료",
        url: "/after_return",
      },
      {
        menuName: "환불대기",
        url: "/before_refund",
      },
      {
        menuName: "환불완료",
        url: "/after_refund",
      },
      {
        menuName: "주문취소",
        url: "/ord_cancel",
      },
      {
        menuName: "발주검수내역",
        url: "/ord_inspection_list",
      },
      {
        menuName: "발주내역",
        url: "/ord_list",
      },
      {
        menuName: "시공관리",
        url: "/construction",
      },
      {
        menuName: "AS요청",
        url: "/construction_as",
      },
    ],
  },
  {
    icon: <FaTableList />,
    name: "게시판관리",
    url: "/board",
    children: [
      {
        menuName: "자주묻는질문",
        url: "/Faq_list",
      },
      {
        menuName: "1:1문의",
        url: "/inquiry_list",
      },
      {
        menuName: "공지사항",
        url: "/notice_list",
      },
      {
        menuName: "NEWS",
        url: "/news_list",
      },
    ],
  },
  {
    icon: <FaMobile />,
    name: "APP관리",
    url: "/app",
    children: [
      {
        menuName: "배너관리",
        url: "/banner_list",
      },
      {
        menuName: "PUSH 알림설정",
        url: "/push_send_cfg",
      },
      {
        menuName: "PUSH 알림내역",
        url: "/push_send_list",
      },
      {
        menuName: "혜택 정보알림",
        url: "/benefit_notification",
      },
      {
        menuName: "설치현황",
        url: "/install_stat",
      },
      {
        menuName: "설치기기현황",
        url: "/install_list",
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
      },
      {
        menuName: "월별매출현황",
        url: "/faq",
      },
      {
        menuName: "자재별매출현황",
        url: "/faq",
      },
      {
        menuName: "자재업체별매출현황",
        url: "/faq",
      },
    ],
  },
];
