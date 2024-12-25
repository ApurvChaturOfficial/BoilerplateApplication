import express from 'express';
import { validationResult } from 'express-validator';

import ErrorUtility from '../../bLove/cUtility/aErrorUtility';


const validatorMiddleware = (request: express.Request, response: express.Response, next: express.NextFunction) => {
  const errors = validationResult(request);

  const joinErrors = errors
    .array()
    .map(each => each.msg)
    .join(", ");

  if (errors.isEmpty()) return (next());
  else return next(new ErrorUtility(joinErrors, 400));
}

export default validatorMiddleware;
