import { onRequestHookHandler } from "fastify";

export const onRequestAuth: onRequestHookHandler = async (req, res, next) => {
	try {
		await req.jwtVerify();
		next();
	} catch (e) {
		return res.send(e);
	}
};
