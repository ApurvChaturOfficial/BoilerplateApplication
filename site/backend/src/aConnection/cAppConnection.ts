import express from 'express';

import bodyParserMiddleware from 'body-parser';
import cookieParserMiddleware from 'cookie-parser';
import corsMiddleware from 'cors';
import compressionMiddleware from 'compression';
import morganMiddleware from 'morgan';


const appConnection = express();

// Third Party Middleware
appConnection.use(morganMiddleware("dev"));
appConnection.use(corsMiddleware({ origin: 
  process.env.ENVIRONMENT === "Production" ? [
    String(process.env.BACKEND_URL)
  ] :
  process.env.ENVIRONMENT === "UAT" ?  [
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
appConnection.get("/", (request, response) => {
  response.send(`Welcome to ${process.env.APPLICATION}`)
})

export default appConnection;
