export const sendData = (res, data, stat) => {
  res
    .status(stat || 200)
    .json({ data: data, status: stat || 200, success: true });
};
