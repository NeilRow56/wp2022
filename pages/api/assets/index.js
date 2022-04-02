import dbConnect from '../../../lib/dbConnect';
import Asset from '../../../models/Asset';

export default async function handler(req, res) {
	const { method } = req;

	dbConnect();

	if (method === 'GET') {
		try {
			const assets = await Asset.find();
			res.status(200).json(assets);
		} catch (error) {
			res.status(500).json(error);
		}
	}

	if (method === 'POST') {
		try {
			const asset = await Asset.create(req.body);
			res.status(201).json(asset);
		} catch (error) {
			res.status(500).json(error);
		}
	}
}
