import { Router } from "express";
import {
    query,
    body,
    validationResult,
    checkSchema,
    matchedData,
} from "express-validator";
import { users } from "../mocks/index.mjs";
import { createUserValidationSchema } from "../utils/validationSchemas.mjs";
import { getIndexByParamsId, confirmUser } from "../utils/middlewares/index.mjs";
import { User } from "../db/mongoose/schemas/user-schema.mjs";
import { hashPassword } from "../utils/helper.mjs";

const userRouter = Router();

userRouter.get(
    '/',
    query('filter')
        .isString()
        .withMessage("filter参数必须为字符串类型")
        .notEmpty()
        .withMessage("filter参数不能为空")
        .isLength({ min: 3, max: 10 })
        .withMessage("filter参数数据必须在3-10个字符内"),
    async (req, res) => {
        const { query: { filter, value } } = req;

        try {
            if (filter && value) {
                const filterObj = {};
                filterObj[filter] = value;
                const filterUserList = await User.find(filterObj);
                return res.sendSuccess(filterUserList);
            }
    
            const userList = await User.find();
    
            return res.sendSuccess(userList);
        } catch (error) {
            return res.sendFailure(400, error)
        }
    }
);

userRouter.post(
    '/',
    checkSchema(createUserValidationSchema),
    async (req, res) => {
        const result = validationResult(req);

        if (!result.isEmpty()) res.sendFailure(400, { errors: result.array() });

        const data = matchedData(req);

        data.password = hashPassword(data.password)
        const newUser = new User(data);
        try {
            const saveUser = await newUser.save();
            res.sendSuccess({ msg: "添加成功", data: saveUser });
        } catch (error) {
            return res.sendFailure(400, error)
        }
        
    }
);

userRouter.get(
    '/:username',
    confirmUser,
    async (req, res) => {
        const { username } = req;

        const user = await User.findOne({ username });

        res.sendSuccess(user);

    });

userRouter.put(
    '/:username',
    confirmUser,
    async (req, res) => {
        const { body, username } = req;

        const oldUser = await User.findOneAndUpdate(
            { username },
            {
                $set: body
            }
        );

        console.log(oldUser);

        res.sendSuccess({ msg: `用户${username}全部更新成功` });

    });

userRouter.patch(
    '/:username',
    confirmUser,
    async (req, res) => {
        const {
            body,
            username
        } = req;

        const oldUser = await User.findOneAndUpdate(
            { username },
            {
                $set: body
            }
        );

        res.sendSuccess({ msg: `用户${username}部分更新成功` });
    });

userRouter.delete(
    '/:username',
    confirmUser,
    async (req, res) => {
        const { username } = req;

        const oldUser = await User.deleteOne({ username });

        res.sendSuccess({ msg: `用户${username}删除成功` });
    });

export default userRouter;