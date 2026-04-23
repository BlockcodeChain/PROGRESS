const errorHandler = (err, req, res, next) => {
  // 🔹 Default values
  let statusCode = err.statusCode || 500
  let message = err.message || "Internal Server Error"

  // 🔹 Mongoose Bad ObjectId Error
  if (err.name === "CastError") {
    statusCode = 400
    message = `Invalid ${err.path}`
  }

  // 🔹 Mongoose Duplicate Key Error
  if (err.code === 11000) {
    statusCode = 400
    const field = Object.keys(err.keyValue).join(", ")
    message = `${field} already exists`
  }

  // 🔹 Mongoose Validation Error
  if (err.name === "ValidationError") {
    statusCode = 400
    const errors = Object.values(err.errors).map((val) => val.message)
    message = errors.join(", ")
  }

  // 🔹 JWT Errors
  if (err.name === "JsonWebTokenError") {
    statusCode = 401
    message = "Invalid token"
  }

  if (err.name === "TokenExpiredError") {
    statusCode = 401
    message = "Token expired"
  }

  // 🔹 Final Response
  res.status(statusCode).json({
    success: false,
    message,
    errors: err.errors || []
  })
}

export default errorHandler