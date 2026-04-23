import jwt from "jsonwebtoken"
import ApiError from "../utils/ApiError.js"

export const protect = (req, res, next) => {
  try {
    const token = req.cookies.token

    if (!token) {
      throw new ApiError(401, "Not logged in")
    }

    const decoded = jwt.verify(token, process.env.JWTSECRET_KEY)

    req.user = decoded.id

    next()
  } catch (err) {
    throw new ApiError(401, "Invalid or expired token")
  }
}