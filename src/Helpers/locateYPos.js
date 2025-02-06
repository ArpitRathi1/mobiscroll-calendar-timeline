export const locateYpos = (ypos, max) => {
  const heightOfRow = 65;

  const heightMultiple = Math.floor(ypos / heightOfRow);

  let yPos = heightMultiple * heightOfRow;

  if (max && yPos >= max * heightOfRow) {
    yPos = (max - 1) * heightOfRow;
  }

  return yPos;
};
