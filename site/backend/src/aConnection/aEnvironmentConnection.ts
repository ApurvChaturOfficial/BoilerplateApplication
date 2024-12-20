import dotenv from "dotenv"


const environmentConnection = () => {
  dotenv.config({ path: ".env" })
}

export default environmentConnection;
