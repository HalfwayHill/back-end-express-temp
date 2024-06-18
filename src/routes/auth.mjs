import { Router } from "express";
import passport from "passport";

const authRouter = Router();

authRouter.post(
    '/login',
    function(req, res, next){
        passport.authenticate('local', function(err, user, info) {
            if(err) {
                return res.sendFailure(401, `用户未验证，消息: ${err.message}`)
            }

            req.logIn(user, function(err) {
                if(err) {
                    return next(err)
                }
                // maxAge: 过期时间 以毫秒计, signed: 是否开启加密
                res.cookie('key', "hello world!", { maxAge: 60000 * 60, signed: true });
                return res.sendSuccess({msg: `${user.username}登陆成功`});
            })
        })(req, res, next);
    }
);

authRouter.get("/status", (req, res) => {
    return req.user
        ? res.sendSuccess(req.user)
        : res.sendFailure(401, "未经过授权")
});

authRouter.post('/logout', (req, res) => {
    if (!req.user) return res.sendFailure(401, "未经过授权");

    const username = req.user.username;

    req.logout((err) => {
        if (err) return res.sendFailure(400, `登出出现问题: ${err}`);

        res.sendSuccess({ msg: `用户${username}登出成功` })
    })
});

export default authRouter;