import {
  BaseBlock,
  BreadCrumb,
  Button,
  Checkbox,
  Description,
  Table,
  Tabs,
  Title,
} from "lib/styles";
import { DescriptionItem } from "lib/styles/description/description";
import styled from "styled-components";
import { FaImage } from "react-icons/fa";
import { StyledTable } from "lib/styles/table/table";
import { useState } from "react";

const OrdDetailBlock = styled(BaseBlock)``;

const SeparationBlock = styled.div`
  display: flex;
  width: 100%;
  margin-bottom: 1rem;
  box-sizing: border-box;
  /* height: 100%; */
`;

const SmallBaseBox = styled.div`
  //! 색상 바꿀것
  box-sizing: border-box;
  border-radius: 1rem 1rem 0 0;
  border: 1px solid #dfdfdf;
  /* height: 100%; */
  /* background-color: red; */
`;

const SmallTitle = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  /* padding: 1rem 1rem; */
  font-weight: bold;
  background-color: #dfdfdf;
  border-radius: 1rem 1rem 0 0;
  /* height: 100%; */

  & > div {
    margin: 1rem 1.25rem;
  }
`;

const SmallTable = styled(StyledTable)`
  border: 0;
  height: 100%;

  * {
    box-sizing: border-box;
  }

  tr td {
    height: 100%;
    padding: 0.25rem 0.5rem;
  }

  tr td:first-child {
    background-color: var(--cus-color-success-bg);
    padding: 0.25rem 0.25rem;
  }

  tr td div {
    padding: 0.25rem 0.5rem;
    background-color: var(--cus-color-success-bg);
    background-color: var(--cus-color-success-text-hover);
    color: var(--cus-color-success-text);
    color: var(--cus-color-success-active);
  }

  tr td div:hover {
  }
`;

const des_items: DescriptionItem[] = [
  {
    label: "시공업체",
    content: "업체",
  },
  {
    label: "공사명",
    content: "업체",
  },
  {
    label: "배송지",
    content: "업체",
  },
  {
    label: "현장인도자",
    content: "홍길동 (010-1234-5678)",
  },
  {
    label: "희망배송일시",
    content: "2023-12-12",
  },
  {
    label: "배송요청사항",
    content: "사항",
  },
];

const detailStatus = [
  {
    title: "발주번호",
    dataIndex: "ord_num",
  },
  {
    title: "발주상태",
    dataIndex: "ord_num",
  },
  {
    title: "판매업체지정",
    dataIndex: "ord_num",
  },
  {
    title: "결제상태",
    dataIndex: "ord_num",
  },
  {
    title: "배송상태",
    dataIndex: "ord_num",
  },
  {
    title: "결제로그",
    dataIndex: "ord_num",
  },
  {
    title: "",
    dataIndex: null,
    style: { width: "100%" },
  },
];

const content = [
  {
    ord_num: 1,
  },
];

const CalcTable = ({ sales_price }: { sales_price: number }) => {
  const [totalPrice, setTotalPrice] = useState(sales_price);
  const onAdd = () => {
    setTotalPrice(totalPrice + sales_price);
  };

  const onMinus = () => {
    if (totalPrice - sales_price > 0) {
      setTotalPrice(totalPrice - sales_price);
    }
  };
  return (
    <SmallTable>
      <tr>
        <td>₩</td>
        <td>{sales_price}</td>
      </tr>
      <tr>
        <td>X</td>
        <td style={{ display: "flex", alignItems: "center" }}>
          <div onClick={onMinus}>-</div>
          <span style={{ width: "100%" }}>{1}</span>
          <div onClick={onAdd}>+</div>
        </td>
      </tr>
      <tr>
        <td>=</td>
        <td>{totalPrice}</td>
      </tr>
    </SmallTable>
  );
};

const CalcBox = styled(BaseBlock)`
  /* margin: 1.25rem; */
  display: flex;
  box-sizing: border-box;
  min-height: unset;
  height: 120px;
  margin-top: 1rem;
  padding: 0;
  /* width: calc(100% - 2.5rem); */
  width: 100%;
  text-align: center;
  background-color: #fff;
  position: sticky;
  bottom: 0;
  left: 0;
  overflow: hidden;

  & > div {
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    width: 100%;
    height: 100%;
    align-items: center;
    justify-content: center;

    div {
      margin: 0.25rem 0;
    }
  }

  & > div div:first-child {
    font-size: 0.75rem;
  }

  & > div div:last-child {
    font-weight: bold;
  }

  .operator {
    font-size: 1.5rem !important;
  }
`;

const SumPrice = () => {
  return (
    <CalcBox>
      <div>
        <div>판매가 합계</div>
        <div>166000</div>
      </div>
      <div>
        <div className="operator">+</div>
      </div>
      <div>
        <div>요청옵션비 합계</div>
        <div>0</div>
      </div>
      <div>
        <div className="operator">+</div>
      </div>
      <div>
        <div>배송비</div>
        <div>0</div>
      </div>
      <div>
        <div className="operator">=</div>
      </div>
      <div style={{ backgroundColor: "var(--cus-color-success-text)" }}>
        <div>결제금액</div>
        <div>166000</div>
      </div>
      <div>
        <div className="operator">-</div>
      </div>
      <div style={{ backgroundColor: "var(--cus-color-primary-text)" }}>
        <div>포인트사용금액</div>
        <div>0</div>
      </div>
      <div>
        <div className="operator">=</div>
      </div>
      <div style={{ backgroundColor: "var(--cus-cyan-6)" }}>
        <div>최종결제금액</div>
        <div>166000</div>
      </div>
      <div style={{ backgroundColor: "var(--cus-gold-5)" }}>
        <div>공급가합계</div>
        <div>판매업체 미지정</div>
      </div>
      <div style={{ backgroundColor: "var(--cus-color-error-text)" }}>
        <div>마진합계</div>
        <div>판매업체 미지정</div>
      </div>
    </CalcBox>
  );
};

const OrdDetail = () => {
  const MaterialTab = () => {
    const materialColumn = [
      {
        title: "번호",
        dataIndex: "num",
      },
      {
        title: <FaImage />,
        dataIndex: "thumbnail",
      },
      {
        title: "카테고리/자재명/안내",
        dataIndex: "title",
        render: (title: any) => {
          return (
            <div
              style={{
                display: "flex",
                height: "100%",
                flexDirection: "column",
                justifyContent: "space-evenly",
              }}
            >
              <div style={{ color: "var(--cus-color-text-tertiary)" }}>
                {title.cate}
              </div>
              <div style={{ fontWeight: "bold" }}>{title.title}</div>
              <div style={{ color: "var(--cus-color-success-text)" }}>
                {title.dele}
              </div>
            </div>
          );
        },
      },
      {
        title: "단위",
        dataIndex: "unit",
      },
      {
        title: "판매가/발주수량/판매금액",
        dataIndex: "sales_price",
        render: (sales_price: number) => {
          return <CalcTable sales_price={sales_price} />;
        },
      },
      {
        title: "요청옵션/비용",
        dataIndex: "option",
        render: () => {
          return (
            <SmallTable>
              <tr>
                <td
                  colSpan={2}
                  style={{ backgroundColor: "#fff", padding: "0" }}
                >
                  <input
                    style={{ height: "100%", width: "100%", border: "0" }}
                  />
                </td>
              </tr>
              <tr>
                <td>+</td>
                <td>0</td>
              </tr>
            </SmallTable>
          );
        },
      },
      {
        title: "소계",
        dataIndex: "sum_price",
        render: (sum_price: number) => {
          return (
            <SmallTable>
              <tr>
                <td colSpan={2} style={{ backgroundColor: "#fff" }}></td>
              </tr>
              <tr>
                <td>=</td>
                <td>{sum_price}</td>
              </tr>
            </SmallTable>
          );
        },
      },
      {
        title: "판매업체",
        dataIndex: "vendor",
      },
    ];

    const MaterialContent = [
      {
        num: 1,
        thumbnail: "",
        title: {
          cate: "바닥공사 / 마루_이건 / 온돌마루",
          title: "제나 내추럴_티크(1박스=48pcs=1평)_7.5T×75×900",
          dele: "발주일로부터 2일 후 납품 (VAT 포함)",
        },
        unit: "박스",
        sales_price: 93500,
        option: "",
        sum_price: 93500,
        vendor: "1. ( 경기 ) 스타키움_자재",
      },
    ];

    const vendorColumn = [
      {
        title: "판매업체",
        dataIndex: "vendor_name",
        render: (vendor_name: any) => (
          <div>
            <div>{vendor_name.com_name}</div>
            <div>
              {vendor_name.ceo_name}&nbsp;/&nbsp;{vendor_name.ceo_mobile}
            </div>
          </div>
        ),
      },
      {
        title: "판매연동",
        dataIndex: "selling",
      },
      {
        title: "요청",
        dataIndex: "ord_register",
        render: (ord_register: boolean) => {
          return <Checkbox />;
        },
      },
      {
        title: "확인",
        dataIndex: "provision_status",
      },
      {
        title: "남품신청",
        dataIndex: "deil_select",
        render: (deil_select: number) => {
          return <Checkbox />;
        },
      },
      {
        title: "공급가합계",
        dataIndex: "total_price",
      },
      {
        title: "요청옵션비 합계",
        dataIndex: "option_price",
      },
      {
        title: "배송비",
        dataIndex: "shipping_fee",
      },
      {
        title: "마진합계",
        dataIndex: "sum_margin",
      },
    ];

    const vendorContent = [
      {
        vendor_name: {
          com_name: "(경기) 스타키움_자재",
          ceo_name: "이정완",
          ceo_mobile: "010-8808-9979",
        },
        selling: "2/2",
        ord_register: true,
        provision_status: "검수대기",
        deil_select: false,
        total_price: 166000,
        option_price: 0,
        shipping_fee: 0,
        sum_margin: 0,
      },
    ];

    return (
      <div>
        <SeparationBlock>
          <SmallBaseBox style={{ width: "30%" }}>
            <SmallTitle>
              <div>기본정보</div>
            </SmallTitle>
            <Description data={des_items} />
          </SmallBaseBox>
          <SmallBaseBox style={{ width: "100%", marginLeft: "2rem" }}>
            <SmallTitle>
              <div>자재정보</div>
              <div>
                <Button>자재업체 인쇄</Button>
              </div>
            </SmallTitle>
            <Table
              columns={materialColumn}
              content={MaterialContent}
              nonPadding={true}
            />
          </SmallBaseBox>
        </SeparationBlock>
        <SeparationBlock>
          <SmallBaseBox style={{ width: "30%" }}>
            <SmallTitle>
              <div>배송담당</div>
            </SmallTitle>
            <Description data={des_items} />
          </SmallBaseBox>
          <SmallBaseBox style={{ width: "100%", marginLeft: "2rem" }}>
            <SmallTitle>
              <div>판매업체</div>
              <div>
                <Button>발주검수 요청</Button>
              </div>
            </SmallTitle>
            <Table
              columns={vendorColumn}
              content={vendorContent}
              nonPadding={true}
            />
          </SmallBaseBox>
        </SeparationBlock>
        {/* <SumPrice /> */}
      </div>
    );
  };

  const ConstructionTab = () => {
    const materialColumn = [
      {
        title: <Checkbox />,
        dataIndex: "title",
        render: (title: any) => {
          return <Checkbox />;
        },
      },
      {
        title: "번호",
        dataIndex: "num",
      },
      {
        title: "공정",
        dataIndex: "process",
      },
      {
        title: "카테고리/자재명/안내",
        dataIndex: "title",
        render: (title: any) => {
          return (
            <div
              style={{
                display: "flex",
                height: "100%",
                flexDirection: "column",
                justifyContent: "space-evenly",
              }}
            >
              <div style={{ color: "var(--cus-color-text-tertiary)" }}>
                {title.cate}
              </div>
              <div style={{ fontWeight: "bold" }}>{title.title}</div>
              <div style={{ color: "var(--cus-color-success-text)" }}>
                {title.dele}
              </div>
            </div>
          );
        },
      },
      {
        title: "시공일자",
        dataIndex: "deadline",
      },
      {
        title: "현장 관리자",
        dataIndex: "field_man",
      },
      {
        title: "현장 주소",
        dataIndex: "field_addr",
      },
      {
        title: "현장 정보",
        dataIndex: "field_info",
      },
    ];

    const MaterialContent = [
      {
        num: 1,
        process: "바닥공사",
        title: {
          cate: "바닥공사 / 마루_이건 / 온돌마루",
          title: "제나 내추럴_티크(1박스=48pcs=1평)_7.5T×75×900",
          dele: "발주일로부터 2일 후 납품 (VAT 포함)",
        },
        deadline: "2024-04-01",
        field_man: "관리자 010-1234-5678",
        field_addr: "경기도 성남시 분당대로",
        field_info: "12평",
      },
    ];

    const vendorColumn = [
      {
        title: "납품신청",
        dataIndex: "sales_price",
        render: (sales_price: number) => {
          return <Checkbox />;
        },
      },
      {
        title: "번호",
        dataIndex: "num",
      },
      {
        title: "시공업체명",
        dataIndex: "vendor_name",
      },
      {
        title: "시공업체 연락처",
        dataIndex: "vendor_mobile",
      },
    ];

    const requestColumn = [
      {
        title: "번호",
        dataIndex: "num",
      },
      {
        title: "공정",
        dataIndex: "processe",
      },
      {
        title: "카테고리/자재명/안내",
        dataIndex: "title",
        render: (title: any) => {
          return (
            <div
              style={{
                display: "flex",
                height: "100%",
                flexDirection: "column",
                justifyContent: "space-evenly",
              }}
            >
              <div style={{ color: "var(--cus-color-text-tertiary)" }}>
                {title.cate}
              </div>
              <div style={{ fontWeight: "bold" }}>{title.title}</div>
              <div style={{ color: "var(--cus-color-success-text)" }}>
                {title.dele}
              </div>
            </div>
          );
        },
      },
      {
        title: "시공업체",
        dataIndex: "vendor_name",
      },
      {
        title: "확인",
        dataIndex: "unit",
      },
      {
        title: "요청일시",
        dataIndex: "created_at",
      },
      {
        title: "공정",
        dataIndex: "processe",
      },
    ];

    return (
      <div>
        <div style={{ display: "flex" }}>
          <SeparationBlock style={{ width: "30%" }}>
            <SmallBaseBox>
              <SmallTitle>
                <div>시공요청 완료</div>
              </SmallTitle>
              <Description data={des_items} />
            </SmallBaseBox>
          </SeparationBlock>
          <SeparationBlock
            style={{ flexDirection: "column", marginLeft: "2rem" }}
          >
            <SmallBaseBox style={{ width: "100%" }}>
              <SmallTitle>
                <div>시공/양중 요청</div>
              </SmallTitle>
              <Table
                columns={materialColumn}
                content={MaterialContent}
                nonPadding={true}
              />
            </SmallBaseBox>
            <SmallBaseBox style={{ width: "100%", marginTop: "2rem" }}>
              <SmallTitle>
                <div>시공업자</div>
                <div>
                  <Button>시공요청</Button>
                </div>
              </SmallTitle>
              <Table
                columns={vendorColumn}
                content={MaterialContent}
                nonPadding={true}
              />
            </SmallBaseBox>
            <SmallBaseBox style={{ width: "100%", marginTop: "2rem" }}>
              <SmallTitle>
                <div>요청중</div>
              </SmallTitle>
              <Table
                columns={requestColumn}
                content={MaterialContent}
                nonPadding={true}
              />
            </SmallBaseBox>
          </SeparationBlock>
        </div>
        {/* <SumPrice /> */}
      </div>
    );
  };

  const tabItems = [
    {
      key: 1,
      label: "자재목록",
      children: <MaterialTab />,
    },
    {
      key: 2,
      label: "시공목록",
      children: <ConstructionTab />,
    },
  ];

  return (
    <>
      <OrdDetailBlock>
        <BreadCrumb
          indicator={[
            {
              name: "홈",
              url: `/`,
            },
            {
              name: "발주관리",
              url: ``,
            },
            { name: "발주 검수중", url: "" },
          ]}
        />
        <Title title={"발주 상세"} />
        <Table columns={detailStatus} content={content} />
        <div style={{ marginBottom: "2rem" }}></div>
        <Tabs items={tabItems} />
      </OrdDetailBlock>
      <SumPrice />
    </>
  );
};

export default OrdDetail;
