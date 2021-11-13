

export const errorHandler = (err, req, res, next) => {
  const error = new Error(`Error: ${err}`);
  res.status(404);
  next(error);
};
