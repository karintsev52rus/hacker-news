export const formateDate = (time: number) => {
  return new Date(time * 1000).toLocaleDateString();
};
