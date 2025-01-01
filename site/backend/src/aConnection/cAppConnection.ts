import express from 'express';

import bodyParserMiddleware from 'body-parser';
import cookieParserMiddleware from 'cookie-parser';
import corsMiddleware from 'cors';
import compressionMiddleware from 'compression';
import morganMiddleware from 'morgan';

import errorMiddleware from '../bLove/bMiddleware/aErrorMiddleware';

import { baseRouter } from '../bLove/aMCVR/dRoute/admin/aSetting/cBaseRoute';


const appConnection = express();

// Third Party Middleware
appConnection.use(morganMiddleware("dev"));
appConnection.use(corsMiddleware({ origin: 
  process.env.ENVIRONMENT === "Production" ? [
    String(process.env.BACKEND_URL)
  ] :
  process.env.ENVIRONMENT === "Testing" ?  [
    String(process.env.BACKEND_URL)
  ] : [
    String(process.env.BACKEND_URL)
  ]
}));
appConnection.use(bodyParserMiddleware.urlencoded({ extended: true }));
appConnection.use(bodyParserMiddleware.json());
appConnection.use(cookieParserMiddleware());
appConnection.use(compressionMiddleware());

// Routing Middleware
appConnection.get("/", (_request, response) => { response.send(`Welcome to ${process.env.APPLICATION}`) })
appConnection.use("/api/v1/base/", baseRouter);

// Error Middleware
appConnection.use(errorMiddleware)

export default appConnection;
