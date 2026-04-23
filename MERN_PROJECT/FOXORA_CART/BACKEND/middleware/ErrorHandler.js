export const ErrorHandler = (err, req, res, next) => {

  err.statusCode = err.statusCode || 500
  err.message = err.message || "Internal Server Error"

  // 🔴 MONGODB CAST ERROR (invalid ID)
  if (err.name === "CastError") {
    err.statusCode = 400
    err.message = "Invalid ID format"
  }

  // 🔴 DUPLICATE KEY ERROR
  if (err.code === 11000) {
    err.statusCode = 400
    err.message = "Duplicate field value"
  }

  // 🔴 JWT INVALID
  if (err.name === "JsonWebTokenError") {
    err.statusCode = 401
    err.message = "Invalid token"
  }

  // 🔴 JWT EXPIRED
  if (err.name === "TokenExpiredError") {
    err.statusCode = 401
    err.message = "Token expired"
  }

  // ✅ FINAL RESPONSE (IMPORTANT)
  return res.status(err.statusCode).json({
    success: false,
    message: err.message
  })
}