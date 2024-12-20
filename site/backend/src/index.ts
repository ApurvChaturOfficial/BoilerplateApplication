import http from 'http';

import environmentConnection from './aConnection/aEnvironmentConnection';
import databaseConnection from './aConnection/bDatabaseConnection';
import appConnection from './aConnection/cAppConnection';
import redisConnection from './aConnection/dRedisConnection';


// Uncaught Exception
process.on("uncaughtException", (error: Error) => {
  console.log(`Error--> ${error.message}`)
  console.log(`Shutting down the server due to Uncaught Exception`)
  process.exit(1)
})

// Conect Environment
environmentConnection();

// Connect Database
databaseConnection();

// Connect Redis
redisConnection()

// Connect App
const server = http.createServer(appConnection);

// Connect Server
server.listen(process.env.PORT, () => {
  console.log(`Server is listening on ${process.env.BACKEND_URL}:${process.env.PORT} on worker service ${process.pid}`)
});

// Unhandled Promise Rejection
process.on("unhandledRejection", (error: Error) => {
  console.log(`Error--> ${error.message}`)
  console.log(`Shutting down the server due to Unhandled Promise Rejection`)

  server.close(() => {
    process.exit(1)
  })
})

