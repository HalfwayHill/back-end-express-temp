import mongoose from "mongoose";

// user模型
const ProductSchema = new mongoose.Schema({
	name: {
        // 设置字段类型
		type: mongoose.Schema.Types.String,
        // 设置为必须字段
		required: true,
        // 设置为唯一字段
		unique: true,
	},
	price: {
        // 设置字段类型
		type: mongoose.Schema.Types.Number,
        // 设置为必须字段
		required: true,
	},
	unit: {
		type: mongoose.Schema.Types.String,
		required: true,
	},
});

export const Product = mongoose.model("Product", ProductSchema);