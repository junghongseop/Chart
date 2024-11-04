import styled from "styled-components";
import LineChart from "./components/LineChart";

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

  return (
    <Apppage>
      <h1>Line Chart Example</h1>
      <Column>
        <LineChart data={metew} name="데이비슨" />
        <LineChart data={kim} name="김도영"/>
      </Column>
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

const Column = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 20px;
`;
