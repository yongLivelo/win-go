export const renderBall = (number: number) => {
  return ["B", "I", "N", "G", "O"][Math.floor((number - 1) / 15)];
};
