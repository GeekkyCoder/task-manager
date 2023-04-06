const { CustomErrorApi } = require("../errors/custom-error");

const customErrorHandler = (err, req, res, next) => {
    // console.log(err instanceof CustomErrorApi)
  if (err instanceof CustomErrorApi) {
    return res.status(err.statusCode).json({ msg: err.message });
  }
  return res.status(500).json({ msg: 'something went wrong' });
};

module.exports = customErrorHandler;
