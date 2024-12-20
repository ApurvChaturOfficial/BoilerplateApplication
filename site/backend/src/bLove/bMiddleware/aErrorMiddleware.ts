import express from "express";
import ErrorUtility from "../cUtility/aErrorUtility";


type ErrorType = {
  status: number,
  message: string,
  name?: string,
  path?: string,
  code?: number,
  keyValue?: any,
}

const errorMiddleware = (error: ErrorType, request: express.Request, response: express.Response, next: express.NextFunction) => {
  error.status = error.status || 500;
  error.message = error.message || "Some Internal Server Error (From Error Middleware)";

  // Cast Error
  if (error.name === "CastError") {
    const message = `Resource Not Found. Invalid: ${error.path}`
    error = new ErrorUtility(message, 400)
  }

  // Mongoose Duplicate Key Error
  if (error.code === 11000) {
    const message = `Duplicate ${Object.keys(error.keyValue)} entered`
    error = new ErrorUtility(message, 400)
  }

  // Wrong JWT Error
  if (error.name === "JsonWebTokenError") {
    const message = `JSON Web Toke is invalid, try again`
    error = new ErrorUtility(message, 400)
  }

  // Expire JWT Error
  if (error.name === "TokenExpiredError") {
    const message = `JSON Web Toke is expired, try again`
    error = new ErrorUtility(message, 400)
  }

  response.status(error.status).json({
    success: false,
    // message: `Not Specified --- ${error.status} ${error.message}`
    message: error.message
  })
}

export default errorMiddleware;
