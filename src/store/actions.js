export const incrementCounter = (num) => {
  return { type: "INCREMENT", num: num };
};

export const decrementCounter = (num) => {
  return { type: "DECREMENT", num: num };
};

export const resetCounter = () => {
  return { type: "RESET" };
};
