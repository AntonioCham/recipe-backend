import dotenv from "dotenv";

dotenv.config();

const SERVER_PORT= process.env.SERVER_PORT ? Number(process.env.SERVER_PORT) : 3000

const MONGODB_USERNAME= process.env.MONGODB_USERNAME || "";
const MONGODB_PASSWORD= process.env.MONGODB_PASSWORD || "";
const MONGODB_URL= `mongodb+srv://${MONGODB_USERNAME}:${MONGODB_PASSWORD}@backend.gpskaf7.mongodb.net/?retryWrites=true&w=majority`;

export const config = {
    mongo: {
        url: MONGODB_URL
    },
    server: {
        port: SERVER_PORT
    }
}
