import { body, param } from "express-validator";
import { isValidObjectId } from "mongoose";

import ErrorUtility from "../../../../cUtility/aErrorUtility";
import { BaseModel } from "../../../../aMCVR/aModel/admin/aSetting/cBaseModel";


const baseValidation = {
  // List
  list: () => [],

  // Create
  create: () => [
    body("aTitle")
      .notEmpty().withMessage("Please enter title")
      .isLength({ min: 3, max: 50 }).withMessage("Title must be 3 - 50 characters"),
    body("aSubtitle")
      .optional()
      .isLength({ min: 3, max: 100 }).withMessage("Subtitle must be 3 - 100 characters")
  ],

  // Retrieve
  retrieve: () => [
    param("id")
      .custom(value => {
        if (!isValidObjectId(value)) throw new ErrorUtility("Please provide valid parameter", 404)
        return true
      })
      .custom(async value => {
        const retrieve = await BaseModel.findById(value);
        if (!retrieve) throw new ErrorUtility("Base Not Found", 404)
        return true;
      }),
  ],

  // Update
  update: () => [
    body("aTitle")
      .notEmpty().withMessage("Please enter title")
      .isLength({ min: 3, max: 50 }).withMessage("Title must be 3 - 50 characters"),
    body("aSubtitle")
      .optional()
      .isLength({ min: 3, max: 100 }).withMessage("Subtitle must be 3 - 100 characters"),

    param("id")
      .custom(value => {
        if (!isValidObjectId(value)) throw new ErrorUtility("Please provide valid parameter", 404)
        return true;
      })
      .custom(async value => {
       const retrieve = await BaseModel.findById(value);
        if (!retrieve) throw new ErrorUtility("Base Not Found", 404)
        return true;
      }),
  ],

  // Delete
  delete: () => [
    param("id")
      .custom(value => {
        if (!isValidObjectId(value)) throw new ErrorUtility("Please provide valid parameter", 404)
        return true
      })
      .custom(async value => {
        const retrieve = await BaseModel.findById(value);
        if (!retrieve) throw new ErrorUtility("Base Not Found", 404)
        return true;
      }),
  ],
  
}

export default baseValidation;
