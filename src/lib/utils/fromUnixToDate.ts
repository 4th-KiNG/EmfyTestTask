import moment from "moment";

export const convertSeconds = (seconds?: number) => {
  return seconds
    ? moment.unix(seconds).format("DD MM YYYY")
    : moment().format("DD MM YYYY");
};
