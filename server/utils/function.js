export const handleCallback = (callback) => {
  return async (req, res, next) => {
    try {
      await callback(req, res, next);
    } catch (error) {
      next(error);
    }
  };
};

export const createError = ({ status, message }) => {
  const err = new Error();
  // eslint-disable-next-line no-unused-expressions
  (err.status = status), (err.message = message);

  return err;
};

export const sendResponse = ({ code, data, payment, message, status, res }) => {
  res.status(code).json({
    data: data ? data : null,
    message,
    status,
    payment,
  });
};
