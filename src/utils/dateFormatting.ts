export function extractMonthNumber(monthNumber: string): string {
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  return monthNames[parseInt(monthNumber) - 1];
}

export function extractDayNumber(str: string): string {
  const lastIndex = str.lastIndexOf("/");
  const nextSpaceIndex = str.indexOf(" ", lastIndex);
  return str.substring(lastIndex + 1, nextSpaceIndex);
}
