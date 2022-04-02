import dbConnect from '../../../lib/dbConnect';
import Asset from '../../../models/Asset';

export default async function handler(req, res) {
	const {
		method,
		query: { id },
	} = req;

	dbConnect();

	if (method === 'GET') {
		try {
			const asset = await Asset.findById(id);
			res.status(200).json(asset);
		} catch (error) {
			res.status(500).json(error);
		}
	}

	if (method === 'PUT') {
		try {
			const asset = await Asset.create(req.body);
			res.status(201).json(asset);
		} catch (error) {
			res.status(500).json(error);
		}
	}

	if (method === 'DELETE') {
		try {
			const asset = await Asset.create(req.body);
			res.status(201).json(asset);
		} catch (error) {
			res.status(500).json(error);
		}
	}
}
