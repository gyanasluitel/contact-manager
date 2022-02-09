exports.validateBody = function (schema) {
  return (req, res, next) => {
    const { body } = req;
    console.log(body);
    const { error } = schema.validate(body, {});
    if (error) {
      next(error);
    }
    next();
  };
};
