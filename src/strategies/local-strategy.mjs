import passport from "passport";
import { Strategy } from "passport-local";
import { users } from "../mocks/index.mjs";
import { User } from "../db/mongoose/schemas/users.mjs";
import { comparePassword } from "../utils/helper.mjs";

passport.serializeUser((user, done) => {
	done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
	try {
        console.log(id);
		const user = await User.findById(id);
		if (!user) throw new Error("用户未找到");
		done(null, user);
	} catch (err) {
		done(err, null);
	}
});

export default passport.use(
    new Strategy(async (username, password, done) => {
        console.log("password local strategy", username, password);
        try {
            const user = await User.findOne({username});
            if (!user) throw new Error("用户未找到");
            if (!comparePassword(password, user.password))
                throw new Error("密码错误");

            done(null, user);
        } catch (error) {
            done(error, null);
        }
        


    })
)