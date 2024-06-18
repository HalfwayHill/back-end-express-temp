import mongoose from "mongoose";

// user模型
const UserSchema = new mongoose.Schema({
	username: {
        // 设置字段类型
		type: mongoose.Schema.Types.String,
        // 设置为必须字段
		required: true,
        // 设置为唯一字段
		unique: true,
	},
	displayName: mongoose.Schema.Types.String,
	password: {
		type: mongoose.Schema.Types.String,
		required: true,
	},
});

export const User = mongoose.model("User", UserSchema);