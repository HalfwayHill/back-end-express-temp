import createApp from './create-app.mjs'

const app = createApp();

const PORT = process.env.PORT || 3000;

console.log('process.env.PORT: ' + process.env.PORT);

app.listen(PORT, () => {
	console.log(`运行express服务器，端口位于${PORT}`);
});