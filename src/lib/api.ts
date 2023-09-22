import { splitDates } from "./utils";
import makeApiRequest from "./axiosInstance";
import dayjs from "dayjs";

export const fetchWildfires = async (selectedDate: any) => {
  const { month, year } = splitDates(
    selectedDate?.year || dayjs(new Date()).format("MMM, YYYY"),
  );

  try {
    const response: any = await makeApiRequest({
      method: "GET",
      url: `/wildfire/fetch-data?month=${month}&year=${year}`,
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};
