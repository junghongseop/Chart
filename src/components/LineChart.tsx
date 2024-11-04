import {
  LineChart as RechartsLineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import styled from "styled-components";

interface ChartProps {
  data: { name: string; games: number; homeruns: number }[];
  name: string;
}

const LineChart = ({ data, name }: ChartProps) => {
  return (
    <ChartContainer>
      <ResponsiveContainer width={600} height={300}>
        <RechartsLineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line
            type="monotone"
            dataKey="games"
            stroke="#8884d8"
            name="경기 수"
          />
          <Line
            type="monotone"
            dataKey="homeruns"
            stroke="#82ca9d"
            name="홈런 수"
          />
        </RechartsLineChart>
      </ResponsiveContainer>
      <NameLabel>{name}</NameLabel>
    </ChartContainer>
  );
};

export default LineChart;

const ChartContainer = styled.div`
  width: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const NameLabel = styled.div`
  margin-top: 10px;
  font-size: 1.2rem;
`;
