import express, { NextFunction } from 'express';


const catchAsyncMiddleware = (mainFunction: express.RequestHandler) => (
  // Returning Function
  (request: express.Request, response: express.Response, next: NextFunction) => {
    Promise.resolve(mainFunction(request, response, next)).catch(next);
  }
)

export default catchAsyncMiddleware;
