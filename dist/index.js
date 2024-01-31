import express from "express";
import dotenv from "dotenv";
dotenv.config();
//Config
const port = process.env.SERVER_PORT;
const app = express();
app.listen(port, () => {
    console.log(`[server]: Server is running at http://localhost:${port}`);
});
//# sourceMappingURL=index.js.map