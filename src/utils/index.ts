import moment from "moment";
import { Schedule } from "../types";

export const getHour = (unixTime: number) => {
  return moment.unix(unixTime).format("hh:mm a");
};

export const prepareDataToRender = (clinic: Array<Schedule>) => {
  console.log(
    "🚀 ~ file: index.ts ~ line 8 ~ prepareDataToRender ~ clinic",
    clinic
  );
  const times = [
    "11:00 am",
    "12:00 pm",
    "01:00 pm",
    "02:00 pm",
    "03:00 pm",
    "04:00 pm",
    "05:00 pm",
    "06:00 pm",
    "07:00 pm",
    "08:00 pm",
    "09:00 pm",
  ];

  const dataToRender = clinic.map((item, index) => {
    const itemDate = moment(item?.availability?.date, "DD-MM-YYYY").toDate();
    const timeSlot = item.available.map((slot) => {
      return {
        from: times.indexOf(getHour(slot.from_unix)),
        to: times.indexOf(getHour(slot.to_unix)),
        result: times.slice(
          times.indexOf(getHour(slot.from_unix)),
          times.indexOf(getHour(slot.to_unix))
        ),
      };
    });
    const blockedTime = item.unavailable?.map((slot) => {
      return {
        from: times.indexOf(getHour(slot.from_unix)),
        to: times.indexOf(getHour(slot.to_unix)),
        result: times.slice(
          times.indexOf(getHour(slot.from_unix)),
          times.indexOf(getHour(slot.to_unix))
        ),
      };
    });

    let availableTimes: any = timeSlot?.map((item) =>
      item.result.map((i) => i)
    );

    let blockedTimes: any = blockedTime?.map((item) =>
      item.result.map((i) => i)
    );

    availableTimes = [].concat.apply([], availableTimes);
    blockedTimes = [].concat.apply([], blockedTimes);

    availableTimes = availableTimes
      .map((item: string) => {
        if (!blockedTimes.includes(item)) {
          return { time: item, isDisable: false };
        } else return { time: item, isDisable: true };
      })
      .filter((data: string) => data);

    const day = {
      isDisable: moment(itemDate).isBefore(moment()),
      date: moment(itemDate).format("dddd MMM YYYYY"),
      day: moment(itemDate, "YYYY/MM/DD").date(),
      availableTimes,
      active: false,
      key: index,
    };
    return day;
  });
  return dataToRender;
};
