import { useEffect, useState } from "react";
import { fetchCurrentYearChart } from "../../../services/chartService";
import { GenericChart } from "../../atoms/genericChart/GenericChart";
import {
  extractDayNumber,
  extractMonthNumber,
} from "../../../utils/dateFormatting";

import styles from "./currentYearChart.module.scss";
type ChartData = {
  name: string;
} & {
  [key: string]: number;
};

function CurrentYearChart() {
  const [chartData, setChartData] = useState<ChartData[]>();
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchCurrentYearChart();
        const modeledData: ChartData[] = data.map((month) => {
          const firstKey = Object.keys(month)[0];
          const days = month[firstKey];
          const formattedDays = days.map((day) => {
            const dayKey = Object.keys(day)[0];
            return { [extractDayNumber(dayKey)]: day[dayKey] };
          });
          return {
            name: extractMonthNumber(firstKey),
            ...Object.assign({}, ...formattedDays),
          };
        });
        setChartData(modeledData);
      } catch (err) {
        console.error("Error fetching data:", err);
        setError("Failed to fetch chart data");
      }
    };

    fetchData();
  }, []);

  if (error) {
    return (
      <div className={styles.error}>
        <p>Error:</p>
        <p>{error}</p>
      </div>
    );
  }

  return (
    <div className={styles.currentYearChartContainer}>
      <h2 className={styles.title}>Current year Info per days</h2>
      {chartData ? (
        <GenericChart barColors={chartColors} data={chartData} />
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
}

export default CurrentYearChart;

const chartColors = [
  "#8884d8",
  "#82ca9d",
  "#ffc658",
  "#ff7a45",
  "#FF8042",
  "#0088FE",
  "#00C49F",
];
