import dotenv from "dotenv";
dotenv.config();

export const ENV = {
    PORT: process.env.PORT ?? "5001",
    GITHUB_URL: process.env.GITHUB_URL ?? "",
    EMAIL: process.env.EMAIL ?? ""
};
