import { IResponseData, IMonthData } from "../types/IChartService";
import config from "../config";

export const fetchCurrentYearChart = async () => {
  try {
    const response = await fetch(`${config.API_HOST}/candidate_test/fronted`);
    const rawData: IResponseData = await response.json();
    return rawData[0]["2024"] as IMonthData[];
  } catch (error) {
    console.error("Error fetching current year chart data:", error);
    throw error;
  }
};
