export const bookSchedule = (time, fn, ln, ph) => {
  return {
    type: "BOOK-SLOT",
    payload: {
      time,
      fn,
      ln,
      ph,
    },
  };
};
