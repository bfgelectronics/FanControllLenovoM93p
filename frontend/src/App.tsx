import {
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import "./App.css";

function App() {
  const data = [
    { temperature: "0", fanSpeed: 12 },
    { temperature: "10*C", fanSpeed: 12 },
    { temperature: "20*C", fanSpeed: 12 },
    { temperature: "30*C", fanSpeed: 12 },
    { temperature: "40*C", fanSpeed: 12 },
    { temperature: "50*C", fanSpeed: 12 },
    { temperature: "60*C", fanSpeed: 12 },
    { temperature: "70*C", fanSpeed: 12 },
    { temperature: "80*C", fanSpeed: 12 },
    { temperature: "90*C", fanSpeed: 12 },
  ];
  return (
    <div className="App">
      <h1 className="title">Fan contoll for lenovo M93p (running linux)</h1>
      <div className="control-graph__container">
        <h2>Fan curve graph</h2>
        <LineChart
          width={730}
          height={250}
          data={data}
          margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="temperature" />
          <YAxis domain={[0, 100]} />
          <Tooltip />
          <Legend />
          <Line
            type="monotone"
            dataKey="fanSpeed"
            stroke="#D61D00"
            strokeWidth={3}
            dot={{ strokeWidth: 2 }}
            activeDot={{ strokeWidth: 2, r: 7 }}
          />
        </LineChart>
      </div>
    </div>
  );
}

export default App;
