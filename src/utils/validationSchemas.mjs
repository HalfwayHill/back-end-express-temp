export const createUserValidationSchema = {
    username: {
        isLength: {
            options: {
                min: 3,
                max: 10,
            },
            errorMessage: "username必须在3-10个字符内",
        },
        notEmpty: {
            errorMessage: "username不能为空",
        },
        isString: {
            errorMessage: "username必须为字符串类型"
        },
    },
    displayName: {
        notEmpty: {
            errorMessage: "displayName不能为空",
        },
    },
    password: {
        notEmpty: {
            errorMessage: "password不能为空",
        },
        isLength: {
            options: {
                min: 3,
                max: 10,
            },
            errorMessage: "username必须在3-10个字符内",
        },
    }
}