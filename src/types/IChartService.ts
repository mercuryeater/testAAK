interface TimestampValue {
  [timestamp: string]: number;
}

interface DayData {
  [day: string]: TimestampValue[];
}

export interface IMonthData {
  [month: string]: DayData[];
}

interface YearData {
  [year: string]: IMonthData[];
}

export interface IResponseData {
  [year: string]: YearData;
}
