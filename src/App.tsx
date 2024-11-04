import styled from "styled-components";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  AreaChart,
  Area,
  ResponsiveContainer,
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
} from "recharts";
import LineChart from "./components/LineChart";
import Pie_Chart from "./components/PieChart";

const areaData = Array.from({ length: 10 }, (_, index) => ({
  name: `Area ${index + 1}`,
  uv: Math.floor(Math.random() * 100),
}));

const radarData = [
  { subject: "Math", A: 120, B: 110, fullMark: 150 },
  { subject: "Chinese", A: 98, B: 130, fullMark: 150 },
  { subject: "English", A: 86, B: 130, fullMark: 150 },
  { subject: "Geography", A: 99, B: 100, fullMark: 150 },
  { subject: "Physics", A: 85, B: 90, fullMark: 150 },
];

function App() {
  const metew = [
    { name: "3월~4월", games: 23, homeruns: 5 },
    { name: "5월", games: 25, homeruns: 8 },
    { name: "6월", games: 24, homeruns: 12 },
    { name: "7월", games: 18, homeruns: 7 },
    { name: "8월", games: 20, homeruns: 6 },
    { name: "9월이상", games: 21, homeruns: 8 },
  ];

  const kim = [
    { name: "3월~4월", games: 31, homeruns: 10 },
    { name: "5월", games: 23, homeruns: 3 },
    { name: "6월", games: 24, homeruns: 8 },
    { name: "7월", games: 22, homeruns: 7 },
    { name: "8월", games: 23, homeruns: 6 },
    { name: "9월이상", games: 18, homeruns: 4 },
  ];

  const barChartData = metew.map((item, index) => ({
    month: item.name,
    metewHomeruns: item.homeruns,
    kimHomeruns: kim[index].homeruns,
  }));

  return (
    <Apppage>
      <h1>Chart Examples</h1>

      <ChartContainer>
        <h2>월별 홈런 개수</h2>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={barChartData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Bar
              dataKey="metewHomeruns"
              fill="rgb(29, 70, 125)"
              name="데이비슨 홈런"
            />
            <Bar dataKey="kimHomeruns" fill="#D00000" name="김도영 홈런" />
          </BarChart>
        </ResponsiveContainer>
      </ChartContainer>

      <ChartContainer>
        <h2>선형 그래프</h2>
        <Column>
          <LineChart data={metew} name="데이비슨" />
          <LineChart data={kim} name="김도영" />
        </Column>
      </ChartContainer>

      <ChartContainer>
        <h2>원 그래프</h2>
        <Pie_Chart />
      </ChartContainer>

      <ChartContainer>
        <h2>영역 그래프</h2>
        <ResponsiveContainer width="100%" height={300}>
          <AreaChart data={areaData}>
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Area
              type="monotone"
              dataKey="uv"
              stroke="#ff7300"
              fillOpacity={1}
              fill="#ffc658"
            />
          </AreaChart>
        </ResponsiveContainer>
      </ChartContainer>

      <ChartContainer>
        <h2>레이더 그래프</h2>
        <ResponsiveContainer width="100%" height={300}>
          <RadarChart outerRadius={90} data={radarData}>
            <PolarGrid />
            <PolarAngleAxis dataKey="subject" />
            <PolarRadiusAxis angle={30} domain={[0, 150]} />
            <Radar
              name="A"
              dataKey="A"
              stroke="#ff7300"
              fill="#ff7300"
              fillOpacity={0.6}
            />
            <Radar
              name="B"
              dataKey="B"
              stroke="#8884d8"
              fill="#8884d8"
              fillOpacity={0.6}
            />
          </RadarChart>
        </ResponsiveContainer>
      </ChartContainer>
    </Apppage>
  );
}

export default App;

const Apppage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  width: 100%;
  height: 100%;
`;

const ChartContainer = styled.div`
  margin: 20px;
  width: 80%;
`;

const Column = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 20px;
`;
