import styled from "styled-components";
import LineChart from "./components/LineChart";

function App() {
  const metew = [
    { name: "3월", uv: 400, pv: 200, amt: 200 },
    { name: "4월", uv: 100, pv: 2400, amt: 200 },
    { name: "5월", uv: 200, pv: 2400, amt: 200 },
    { name: "6월", uv: 300, pv: 2400, amt: 200 },
    { name: "7월", uv: 200, pv: 2400, amt: 200 },
    { name: "8월", uv: 500, pv: 2400, amt: 200 },
    { name: "9월", uv: 500, pv: 2400, amt: 200 },
    { name: "10월", uv: 500, pv: 2400, amt: 200 },
  ];

  const kim = [
    { name: "3월", uv: 400, pv: 200, amt: 200 },
    { name: "4월", uv: 100, pv: 2400, amt: 200 },
    { name: "5월", uv: 200, pv: 2400, amt: 200 },
    { name: "6월", uv: 300, pv: 2400, amt: 200 },
    { name: "7월", uv: 200, pv: 2400, amt: 200 },
    { name: "8월", uv: 500, pv: 2400, amt: 200 },
    { name: "9월", uv: 500, pv: 2400, amt: 200 },
    { name: "10월", uv: 500, pv: 2400, amt: 200 },
  ];

  return (
    <Apppage>
      <h1>Line Chart Example</h1>
      <Column>
        <LineChart data={metew} />
        <LineChart data={kim} />
      </Column>
    </Apppage>
  );
}

export default App;

const Apppage = styled.div`
  width: 100%;
  height: 100%;
  align-items: center;
  text-align: center;
  justify-content: center;
`;

const Column = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;
