import bcrypt from "bcrypt";

// Hash轮询次数
const saltRounds = 10;

// 设置密码Hash
export const hashPassword = (password) => {
	const salt = bcrypt.genSaltSync(saltRounds);
    console.log(salt);
	return bcrypt.hashSync(password, salt);
};

// 对比密码
export const comparePassword = (plain, hashed) =>
	bcrypt.compareSync(plain, hashed);