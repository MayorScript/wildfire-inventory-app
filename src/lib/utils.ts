export function splitDates(inputString: string) {
  const parts = inputString.split(", ");
  const month = parts[0].toUpperCase();
  const year = parts[1];
  return { month, year };
}