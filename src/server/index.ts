import express from "express";
import mongoose from "mongoose";
import serverConfig from "../config/config";
import recipeRoute from "../routes/recipeRoute"
import swaggerUi from "swagger-ui-express";

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json())


mongoose.connect(serverConfig.mongo.url)
.then(() => {
    console.log(`[database]: Mongooes DB connected`)
})
.catch((error) => {
    console.log(serverConfig.mongo.url);
    console.log(error);
});

app.listen(serverConfig.server.port, () => {
    console.log(`[server]: Server is running at http://localhost:${serverConfig.server.port}`)
});

app.use('/api/v1/recipe', recipeRoute);
app.get('/ping', (req, res, next) => res.status(200).json({ hello: 'world' }));