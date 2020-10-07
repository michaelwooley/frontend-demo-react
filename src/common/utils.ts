import { default as moment } from "moment";
import { MomentInput } from "moment";
import { MS_TIME } from "./constants";

// moment.calendarFormat;
export const getDateFormatter = <T = string>(
  dates: T[],
  accessFn: (el: T) => MomentInput
): ((dateLike: MomentInput) => string) => {
  const start = moment(accessFn(dates[0]));
  const end = moment(accessFn(dates.slice(-1)[0]));

  const diff = moment(end).diff(start);

  let fmt: string;
  if (diff < MS_TIME.hour) {
    fmt = "ddd [\n] h:mmA z";
  } else if (diff < MS_TIME.day) {
    //   TODO Check
    fmt = "ddd[\n]h:mmA z";
  } else if (diff < MS_TIME.week) {
    fmt = "ddd";
  } else if (diff < MS_TIME.month) {
    fmt = "MMM[\n]D";
  } else if (diff < MS_TIME.year) {
    fmt = "MMM D, YYYY";
  } else {
    fmt = "MMM D, YYYY";
  }

  return (dateLike: MomentInput): string => moment(dateLike).format(fmt);
};
