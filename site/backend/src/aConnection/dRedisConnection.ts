import Redis from 'ioredis';


const redisClient = new Redis({
  host: "redis-16631.c9.us-east-1-4.ec2.redns.redis-cloud.com",
  port: 16631,
  password: "qqsRW8XLytREHANeaw8ZTYn8c6usNc1t"
})

const redisConnection = (client: Redis = redisClient) => {
  client.on("error", (error) => {
    console.log("Redis Client Error")
  })

  client.on("connect", () => {
    console.log(`Great... Redis connected on server ${client.options.host}`)
  })
}

export default redisConnection;
export { redisClient };
