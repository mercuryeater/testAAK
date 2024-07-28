import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  Rectangle,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { ChartData } from "../../../types/IChartData";

import styles from "./genericChart.module.scss";

type ChartDataProps = {
  data: ChartData[] | undefined;
  barColors: string[];
};

export const GenericChart = ({ data, barColors }: ChartDataProps) => {
  return (
    <div className={styles.chartContainer}>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />

          {data &&
            Object.keys(data[0]).map((key, index) => {
              if (key !== "name") {
                const barColorIndex = index % barColors.length;
                return (
                  <Bar
                    key={key}
                    dataKey={key}
                    fill={barColors[barColorIndex]}
                    activeBar={<Rectangle stroke="black" />}
                  />
                );
              }
              return null;
            })}
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};
