import express from "express";
import router from './routes/index.mjs';
import cookieParser from "cookie-parser";
import session from "express-session";
import passport from "passport";
import MongoStore from "connect-mongo";
import mongoose from "mongoose";
import { resSuccessPipe, resFailurePipe } from "./utils/response.mjs";
import { loggingMiddleware, checkCookiesMiddleware } from "./utils/middlewares/index.mjs"
import "./strategies/local-strategy.mjs";

export default function createApp() {
    const app = express();

    app.response.sendSuccess = resSuccessPipe;
    app.response.sendFailure = resFailurePipe;

    // 添加解析请求json格式
    app.use(express.json());
    // 参数是给cookie加密解密的密钥字符串
    app.use(cookieParser("encryptionKey"));
    app.use(
		session({
			secret: "encryption",
			saveUninitialized: false,
            // true 每次都会更新，即使不变化
			resave: false,
			cookie: {
				maxAge: 60000 * 60,
			},
            store: MongoStore.create({
				client: mongoose.connection.getClient(),
			}),
		})
	);

    app.use(passport.initialize());
	app.use(passport.session());

    app.use(loggingMiddleware);
    app.use(checkCookiesMiddleware);

    app.use("/api", router);

    return app;
}