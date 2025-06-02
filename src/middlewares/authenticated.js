import jwt from 'jsonwebtoken';

const secret = process.env.JWT_SECRET;

function authenticated(req, res, next) {
	const authHeader = req.headers.authorization;

	if (!authHeader || !authHeader.startsWith('Bearer ')) {
		return res
			.status(401)
			.json({ message: 'Unauthorized, no token provided' });
	}

	const token = authHeader.split(' ')[1];

	try {
		const decoded = jwt.verify(token, secret);

		req.user = {
			user_id: decoded.user_id,
			role: decoded.role,
		};

		next();
	} catch (error) {
		return res
			.status(401)
			.json({ message: 'Unauthorized, invalid token or expired' });
	}
}

export default authenticated;
