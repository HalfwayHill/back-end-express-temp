// 应用中间件
const loggingMiddleware = (req, res, next) => {
    // 无需检查Cookie的路由直接通过
    if (req.url === "/" || req.url.includes("/api/auth")) return next();

    if (!req.user) return res.sendFailure(401, "未经过授权，请重新登陆");
    next();
}


export default loggingMiddleware;