import { io } from "socket.io-client";
let baseUrl;
if (process.env.NODE_ENV == 'production') {
	baseUrl = 'http://localhost:5010/';
} else {
	baseUrl = 'http://localhost:5010/';
}
// const socket = io(baseUrl)
export { baseUrl };
// export { baseUrl, socket };