import { User } from "../../db/mongoose/schemas/user-schema.mjs";

// 路由中间 验证用户
const confirmUser = async (req, res, next) => {
    const {
        params: { username },
    } = req;

    if (typeof username !== "string") 
        return res.sendFailure(400, `错误请求。非法ID为 ${req.params.username}`);

    const user = await User.findOne({ username });

    if (!user) res.sendFailure(404, `未找到该用户。ID为 ${req.params.username}`);

    req.username = username;
    next();
};

export default confirmUser;