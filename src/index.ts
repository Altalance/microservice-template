import app from "./app.js";

const PORT = process.env.PORT || 8000;

app.listen(PORT, ():void => {
	console.log(`microservice running at port ${PORT}`);
})