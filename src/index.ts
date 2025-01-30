import express from "express";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";
import { ENV } from "./constants/env";
import logger from "./utils/logger.utils";

const app = express();

app.use(cors());
app.use(helmet());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(morgan("dev"));

app.get("/", (_req, res) => {
    res.json({
        email: ENV.EMAIL,
        current_datetime: new Date().toISOString(),
        github_url: ENV.GITHUB_URL
    });
});

app.listen(ENV.PORT, () => {
    logger(`Server running on http://localhost:${ENV.PORT}`);
});
