import express from 'express';

import { redisClient } from '../../aConnection/dRedisConnection';
import catchAsyncMiddleware from "./bCatchAsyncMiddleware";


const checkCacheMiddleware = (key: string, label: string, name: string) => (
  catchAsyncMiddleware(
    // Returning Function
    async (request: express.Request, response: express.Response, next: express.NextFunction) => {

      // Check Cache
      const cacheKey = key === `${label.toLowerCase()}-retrieve` ? `${label.toLowerCase()}-retrieve:${request.params.id}` : key
      const oldCache = await redisClient.get(cacheKey);

      if (oldCache) {
        console.log("Congratulations... We got cache")

        // Response
        response.status(200).json({
          success: true,
          message: `${label} ${name}ed Successfully... From Backend Cache`,
          [name.toLowerCase()]: JSON.parse(oldCache),
        })

        return;
      } else {
        console.log("Oops... No cache found")

        // Move Next
        return next();
      } 

    }
  )
)

export default checkCacheMiddleware;
