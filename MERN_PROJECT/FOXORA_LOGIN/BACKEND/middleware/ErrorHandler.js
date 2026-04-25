const ErrorHandler = (err, req, res, next) => {
    let statusCode = err.statusCode || 500;
    let message = err.message || "Internal Server Error";

    // ===============================
    // MONGOOSE CAST ERROR (Invalid ID)
    // ===============================
    if (err.name === "CastError") {
        statusCode = 400;
        message = `Invalid ${err.path}: ${err.value}`;
    }

    // ===============================
    // MONGOOSE DUPLICATE KEY ERROR
    // ===============================
    if (err.code === 11000) {
        statusCode = 400;
        const field = Object.keys(err.keyValue);
        message = `Duplicate value entered for ${field}`;
    }

    // ===============================
    // MONGOOSE VALIDATION ERROR
    // ===============================
    if (err.name === "ValidationError") {
        statusCode = 400;
        message = Object.values(err.errors)
            .map((val) => val.message)
            .join(", ");
    }

    // ===============================
    // JWT ERROR (Invalid Token)
    // ===============================
    if (err.name === "JsonWebTokenError") {
        statusCode = 401;
        message = "Invalid Token. Please login again.";
    }

    // ===============================
    // JWT EXPIRED ERROR
    // ===============================
    if (err.name === "TokenExpiredError") {
        statusCode = 401;
        message = "Token expired. Please login again.";
    }

    // ===============================
    // FINAL RESPONSE
    // ===============================
    res.status(statusCode).json({
        success: false,
        message,
    });
};

export default ErrorHandler;