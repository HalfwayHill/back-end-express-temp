import mongoose from "mongoose";
import createApp from './create-app.mjs';

mongoose
	.connect("mongodb://localhost:27017/express_back_template")
	.then(() => console.log("数据库连接成功"))
	.catch((err) => console.log(`错误信息: ${err}`));

const app = createApp();

// 用于查看当前主机环境是否设置了端口，如果没有则开启3000端口监听
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
    console.log(req.session);
    console.log(req.session.id);
    res.sendSuccess({ msg: "登陆成功" });
});

app.listen(PORT, () => {
    console.log(`运行express服务器，端口位于${PORT}`);
});