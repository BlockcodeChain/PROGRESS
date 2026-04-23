const errorMiddleware = (err, req, res, next) => {
  console.error("Unhandled Error:", err.stack || err)

  // Default error
  err.statusCode = err.statusCode || 500;
  err.message = err.message || "Internal Server Error";

  // 🔴 Mongoose Validation Error
  if (err.name === "ValidationError") {
    const messages = Object.values(err.errors).map((item) => item.message);
    err = { statusCode: 400, message: messages.join(", ") };
  }

  // 🔴 Mongoose Cast Error (Invalid ID)
  if (err.name === "CastError") {
    const message = `Invalid ${err.path}`;
    err = { statusCode: 400, message };
  }

  // 🔴 JWT Invalid
  if (err.name === "JsonWebTokenError") {
    const message = "Invalid token, try again";
    err = { statusCode: 401, message };
  }

  // 🔴 JWT Expired
  if (err.name === "TokenExpiredError") {
    const message = "Token expired, please login again";
    err = { statusCode: 401, message };
  }

  // 🔴 Duplicate Key Error (MongoDB)
  if (err.code === 11000) {
    const field = Object.keys(err.keyValue).join(", ");
    const message = `Duplicate ${field} entered`;
    err = { statusCode: 400, message };
  }

  res.status(err.statusCode).json({
    success: false,
    message: err.message
  });
};

export default errorMiddleware;