import { BaseBlock, Title } from "lib/styles";
import Chart from "react-apexcharts";
import styled from "styled-components";

const DashboardBlock = styled.div`
  width: 100%;
`;

const options = {
  chart: {
    id: "basic-bar",
    stroke: {
      curve: "smooth",
    },
  },

  xaxis: {
    categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999],
  },
  yaxis: [
    {
      axisTicks: {
        show: true,
      },
      axisBorder: {
        show: true,
      },
      labels: {},
      title: {
        // text: "Series A",
      },
    },
    {
      opposite: true,
      axisTicks: {
        show: true,
      },
      axisBorder: {
        show: true,
      },
      labels: {},
      title: {
        // text: "Series B",
      },
    },
  ],
};

const series = [
  {
    name: "Series A",
    data: [30, 40, 45, 50, 49, 60, 70, 91],
  },
  {
    name: "Series B",
    data: [0, 1, 2, 3, 4, 5, 6, 7],
  },
];

const Dashboard = () => {
  return (
    <DashboardBlock>
      <BaseBlock>
        <Title subTitle={"일별 매출통계"} />
        <Chart options={options} series={series} type="line" />
      </BaseBlock>
      <BaseBlock />
      <BaseBlock />
      <BaseBlock />
      <BaseBlock />
    </DashboardBlock>
  );
};

export default Dashboard;
