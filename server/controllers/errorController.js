const AppError = require('../utils/appError');

const handleCastErrorDB = error => {
  const message = `Invalid ${error.path}: ${error.value}`;
  return new AppError(message, 400);
};

const handleDuplicateFieldsDB = error => {
  const value = error.errmsg.match(/([""])(\\?.)*?\1/)[0];
  const message = `Duplicate field value: ${value}. Please use another value!`;

  return new AppError(message, 400);
};

const handleValidationErrorDB = error => {
  const errors = Object.values(error.errors).map(el => el.message);

  const message = `Invalid input data. ${errors.join('. ')}`;

  return new AppError(message, 400);
};

const handleJWTError = error =>
  new AppError('Invalid token, please login again!', 401);

const handleJWTExpiredError = error =>
  new AppError('Your token has expired!, Please login again', 401);

const sendErrorForDev = (error, res) => {
  res.status(error.statusCode).json({
    status: error.status,
    error,
    message: error.message,
    stack: error.stack
  });
};

const sendErrorProd = (error, res) => {
  // Operational trusted error: send message to client
  if (error.isOperational) {
    res.status(error.statusCode).json({
      status: error.status,
      message: error.message
    });

    // Programming or unknown error: don't leak error details
  } else {
    // 1) LOG error to the console
    console.error('💥', error);

    // 2) Send generic message
    res.status(500).json({
      status: 'error',
      message: 'Something went very wrong'
    });
  }
};

module.exports = (error, req, res, next) => {
  error.statusCode = error.statusCode || 500;
  error.status = error.status || 'error';

  if (process.env.NODE_ENV === 'development') {
    sendErrorForDev(error, res);
  } else if (process.env.NODE_ENV === 'production') {
    let errorNode = { ...error };
    if (errorNode.name === 'CastError') {
      errorNode = handleCastErrorDB(errorNode);
    }

    if (errorNode.code === 11000) {
      errorNode = handleDuplicateFieldsDB(errorNode);
    }

    if (errorNode.name === 'ValidationError') {
      errorNode = handleValidationErrorDB(errorNode);
    }

    if (errorNode.name === 'JsonWebTokenError') {
      errorNode = handleJWTError(errorNode);
    }

    if (errorNode.name === 'TokenExpiredError') {
      errorNode = handleJWTExpiredError(errorNode);
    }

    sendErrorProd(errorNode, res);
  }
};
