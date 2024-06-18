// 应用中间件
const checkCookiesMiddleware = (req, res, next) => {
    console.log(`${req.method} ${req.url}`);

    // 无需检查Cookie的路由直接通过
    if (req.url === "/" || req.url.includes("/api/auth")) return next();

    // 检查通过
    if (req.signedCookies && req.signedCookies.key === "hello world!") {
        return next();
    }

    // 检查失败
    return res.sendFailure(403, "cookie 检查失败");
    
}


export default checkCookiesMiddleware;