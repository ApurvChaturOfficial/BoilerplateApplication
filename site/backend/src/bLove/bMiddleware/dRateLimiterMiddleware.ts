import express from 'express';

import { redisClient } from '../../aConnection/dRedisConnection';
import catchAsyncMiddleware from './bCatchAsyncMiddleware';


const rateLimiterMiddleware = (key: string, time: number, limit: number) => (
  catchAsyncMiddleware(
    async (request: express.Request, response: express.Response, next: express.NextFunction): Promise<void> => {

      // Rate Limiter
      const clientIP = request.headers["x-forwarded-for"] || request.socket.remoteAddress;
      const rateKey = `${clientIP}:${key}:rate-count`;
      const requestCount = await redisClient.incr(rateKey);
      const timeRemaining = await redisClient.ttl(rateKey);

      // Important Comment Below (Do NOT Delete)
      // console.log(rateKey, requestCount);
      // await redisClient.del(rateKey);

      // Setup Count
      if (requestCount === 1) {
        await redisClient.expire(rateKey, time);
      }

      // Check Count
      if (requestCount > limit) {
        response.status(429).json({
          success: false,
          message: `Too many requests... Please try again after ${timeRemaining} seconds!`
        })

        return;
      }

      // Response
      return next()
      
    }
  )
) 

export default rateLimiterMiddleware;
