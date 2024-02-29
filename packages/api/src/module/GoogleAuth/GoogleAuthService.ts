import { FastifyInstance } from "fastify";

const privateKey = process.env.LIQPAY_PRIVATE_KEY;
const publicKey = process.env.LIQPAY_PUBLIC_KEY;

export class GoogleAuthService {
	constructor(
		private readonly fastify: FastifyInstance
	) {}

	init(): void {
		this.fastify.get("/liqpay", async (req, reply) => {
            const html = `
                <!DOCTYPE html>
                <html>
                    <head>
                        <title>LiqPay</title>
                    </head>
                    <body>
                        <form method="post" action="https://www.liqpay.ua/api/3/checkout" accept-charset="utf-8">
                            <input type="hidden" name="data" value="eyJhbW91bnQiOjEwMCwiZGVzY3JpcHRpb24iOiJFbWFpbCB0ZXN0In0=">
                            <input type="hidden" name="signature" value="signature">
                            <input type="image" src="//static.liqpay.ua/buttons/p1en.radius.png" name="btn_text" />
                        </form>
                    </body>
                </html>
            `;
            return reply.type("text/html").send(html);
        });

this.fastify.post<{Body: {data: string; signature: string}}>
("/liqpay", async (req, reply) => {
			const data = req.body.data;
			const signature = req.body.signature;
			const liqpay = require('liqpay')(publicKey, privateKey);
			const decodedData = Buffer.from(data, 'base64').toString('utf-8');
			const decodedSignature = liqpay.str_to_sign(privateKey + decodedData + privateKey);
			if (decodedSignature === signature) {
				const parsedData = JSON.parse(decodedData);
				this.fastify.log.info(parsedData);
				return reply.send({ success: true });
			}
			return reply.send({ success: false });
		});
	}
}


