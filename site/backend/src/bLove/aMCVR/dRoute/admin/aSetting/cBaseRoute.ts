import express from 'express';

import rateLimiterMiddleware from '../../../../bMiddleware/dRateLimiterMiddleware';
import checkCacheMiddleware from '../../../../bMiddleware/eCheckCacheMiddleware';
import validatorMiddleware from '../../../../bMiddleware/cValidationMiddleware';

import baseValidation from '../../../cValidation/admin/aSetting/aBaseValidation';
import baseController from '../../../bController/admin/aSetting/aBaseController';


const router = express.Router();

router.route("/list").get(
  rateLimiterMiddleware("base-list", 60, 10),
  checkCacheMiddleware("base-list", "Base", "List"), 
  baseValidation.list(), validatorMiddleware, 
  baseController().list
)

router.route("/create").post(
  rateLimiterMiddleware("base-create", 60, 10),
  baseValidation.create(), validatorMiddleware,
  baseController().create
)

router.route("/retrieve/:id").get(
  rateLimiterMiddleware("base-retrieve", 60, 10), 
  checkCacheMiddleware("base-retrieve", "Base", "Retrieve"), 
  baseValidation.retrieve(), validatorMiddleware, 
  baseController().retrieve
)

router.route("/update/:id").put(
  rateLimiterMiddleware("base-update", 60, 10), 
  baseValidation.update(), validatorMiddleware, 
  baseController().update
)

router.route("/delete/:id").delete(
  rateLimiterMiddleware("base-delete", 60, 10), 
  baseValidation.delete(), validatorMiddleware, 
  baseController().delete
)

export const baseRouter = router
