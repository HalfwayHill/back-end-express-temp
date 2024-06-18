import { users } from "../../mocks/index.mjs";

// 路由中间 解析用户ID
const getIndexByParamsId = async (req, res, next) => {
    const {
        params: { id },
    } = req;

    const userId = parseInt(id);
    if (isNaN(userId))
        return res.sendFailure(400, `错误请求。非法ID为 ${req.params.id}`);

    const index = users.findIndex(item => item.id === userId);

    if (index === -1) res.sendFailure(404, `未找到该用户。ID为 ${req.params.id}`);

    req.userIndex = index;
    next();
};

export default getIndexByParamsId;