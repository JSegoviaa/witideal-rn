export const toDateTime = (seconds: number) => {
  const t = new Date(1970, 0, 1); // Epoch
  t.setSeconds(seconds);
  return t;
};
