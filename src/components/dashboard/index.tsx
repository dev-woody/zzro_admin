import { priceToString } from "lib/function/changeInput";
import {
  BaseBlock,
  Calender,
  ProgressBar,
  ProgressData,
  Table,
  Tag,
} from "lib/styles";
import styled from "styled-components";
import { Line, Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { ColumnsType } from "lib/columns/sidebar";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const DashboardBlock = styled.div`
  width: 100%;
`;

const CustomBaseBlock = styled(BaseBlock)`
  flex-grow: 1;
  margin: 0 0.5rem;
  margin-bottom: 1rem;
`;

const ChartBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  /* justify-content: stretch; */
`;

const FlexBox = styled.div`
  width: 100%;
  display: flex;
`;

const Dashboard = () => {
  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "top" as const,
      },
    },
  };

  const data = {
    labels: ["02.08", "02.09", "02.10", "02.11", "02.12", "02,13", "02.14"],
    datasets: [
      {
        label: "일별 입금합계",
        data: [5, 6, 7],
        borderColor: "#52c41a",
        backgroundColor: "#f6ffed",
      },
      {
        label: "일별 입금건수",
        data: [3, 2, 1],
      },
    ],
  };

  const barData = {
    labels: [
      "발주신청",
      "발주수정",
      "발주검수중",
      "결제대기",
      "배송대기",
      "배송진행",
      "반품대기",
      "반품진행",
      "환불대기",
    ],
    datasets: [
      {
        label: "발주상태별 현황",
        data: [5, 3, 100],
        borderColor: "#ff4d4f",
        backgroundColor: "#ffccc7",
      },
    ],
  };

  const deliveryCodeColumns: ColumnsType[] = [
    {
      title: "발주신청",
      dataIndex: "application",
    },
    {
      title: "발주수정",
      dataIndex: "modification",
    },
    {
      title: "발주검수중",
      dataIndex: "inspection",
    },
    {
      title: "결제대기",
      dataIndex: "waitingForP",
    },
    {
      title: "배송대기",
      dataIndex: "waitingForS",
    },
    {
      title: "배송진행",
      dataIndex: "shipping",
    },
    {
      title: "반품대기",
      dataIndex: "waitingForReturn",
    },
    {
      title: "반품진행",
      dataIndex: "return",
    },
    {
      title: "환불대기",
      dataIndex: "refund",
    },
  ];

  const orderData = [
    {
      application: "1",
      modification: "1",
      inspection: "1",
      waitingForP: "1",
      waitingForS: "1",
      shipping: "1",
      waitingForReturn: "1",
      return: "1",
      refund: "1",
    },
  ];

  const calculateInfo = [
    {
      title: "주간 정산금액",
      data: 15000000,
    },
    {
      title: "월간 정산금액",
      data: 33000000,
    },
  ];

  const texInfo = [
    {
      title: "수취",
      data: 16000000,
    },
    {
      title: "미수취",
      data: 20000000,
    },
  ];

  const unadjustedInfo = [
    {
      title: "미정산 건수",
      data: "5건",
    },
  ];

  const marginInfo = [
    {
      title: "주간 마진금액",
      data: 12000000,
    },
    {
      title: "월간 마진금액",
      data: 40000000,
    },
  ];

  const QnAColumns: ColumnsType[] = [
    {
      title: "번호",
      dataIndex: "index",
    },
    {
      title: "제목",
      dataIndex: "title",
    },
    {
      title: "업체명",
      dataIndex: "com_name",
    },
    {
      title: "작성자",
      dataIndex: "com_user",
    },
    {
      title: "작성일시",
      dataIndex: "created_at",
    },
    {
      title: "답변상태",
      dataIndex: "Astatus",
      render: (Astatus) =>
        Astatus ? (
          <Tag text="답변완료" color="info" />
        ) : (
          <Tag text="답변대기" color="error" />
        ),
    },
  ];

  let QnAdata: any[] = [];

  for (let i = 0; i < 11; i++) {
    QnAdata.push({
      index: i,
      title: "번호",
      com_name: "업체명",
      com_user: "작성자",
      created_at: "2024-02-14",
      Astatus: i / 2 === 1 ? true : false,
    });
  }

  return (
    <DashboardBlock>
      <ChartBox>
        <FlexBox
          style={{
            flexDirection: "column",
          }}
        >
          <FlexBox
            style={{
              flexDirection: "row",
            }}
          >
            <CustomBaseBlock>
              <ProgressBar
                title="총 매출"
                per={51}
                amount={priceToString(60000000)}
              />
            </CustomBaseBlock>
            <CustomBaseBlock>
              <ProgressBar
                title="총 판매"
                per={15.56}
                amount={priceToString(80000000)}
              />
            </CustomBaseBlock>
          </FlexBox>
          <FlexBox>
            <CustomBaseBlock>
              <ProgressBar
                title="취소&환불"
                per={15.76}
                amount={priceToString(20000000)}
              />
            </CustomBaseBlock>
            <CustomBaseBlock>
              <ProgressBar
                title="포인트 환불"
                per={-25.76}
                amount={priceToString(13000000)}
              />
            </CustomBaseBlock>
            <CustomBaseBlock>
              <ProgressBar
                title="현금 환불"
                per={40.76}
                amount={priceToString(7000000)}
              />
            </CustomBaseBlock>
          </FlexBox>
        </FlexBox>
        <FlexBox>
          <CustomBaseBlock>
            <div style={{ height: "100%" }}>
              <Line options={options} data={data} />
            </div>
          </CustomBaseBlock>
        </FlexBox>
      </ChartBox>
      <FlexBox>
        <CustomBaseBlock>
          <Table columns={deliveryCodeColumns} content={orderData} />
          <div>
            <Bar data={barData} options={options} />
          </div>
        </CustomBaseBlock>
      </FlexBox>
      <FlexBox>
        <CustomBaseBlock>
          <ProgressData
            title="정산금액"
            per={0.5}
            amount={priceToString(48000000)}
            info={calculateInfo}
          />
        </CustomBaseBlock>
        <CustomBaseBlock>
          <ProgressData
            title="세금계산서"
            amount={priceToString(3600000)}
            info={texInfo}
          />
        </CustomBaseBlock>
        <CustomBaseBlock>
          <ProgressData
            title="미정산금액"
            // per={40.76}
            amount={priceToString(3600000)}
            info={unadjustedInfo}
          />
        </CustomBaseBlock>
        <CustomBaseBlock>
          <ProgressData
            title="마진금액"
            per={0.5}
            amount={priceToString(52000000)}
            info={marginInfo}
          />
        </CustomBaseBlock>
      </FlexBox>
      <FlexBox>
        <CustomBaseBlock>
          <Calender />
        </CustomBaseBlock>
        <CustomBaseBlock>
          <Table columns={QnAColumns} content={QnAdata} />
        </CustomBaseBlock>
      </FlexBox>
    </DashboardBlock>
  );
};

export default Dashboard;
