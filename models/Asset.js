import mongoose from 'mongoose';

const AssetSchema = new mongoose.Schema(
	{
		name: {
			type: String,
			required: true,
			maxlength: 60,
		},
		description: {
			type: String,
			required: true,
			maxlength: 200,
		},
		dateAcquired: {
			type: Date,
			required: false,
		},
		cost: {
			type: Number,
			required: true,
		},
		valuation: {
			type: Number,
			default: 0,
		},
		dateRevalued: {
			type: Date,
		},
		category: {
			type: String,
			required: [false, 'Please enter asset category'],
			enum: {
				values: [
					'Pant & Equip.',
					'Vehicles',
					'Office Equip',
					'Furniture & Fixtures',
					'Freehold Prop',
					'Leasehold Property',
					'Investment Property',
					'Investments',
					'Goodwill',
				],
				message: 'Please select correct category for asset',
			},
		},
		writtenDownValue: {
			type: Number,
			required: true,
		},
		depreciationMethod: {
			type: String,
			required: [false, 'Please enter asset category'],
			enum: {
				values: ['Reducing Balance.', 'Straight Line'],
				message: 'Please select correct method for asset',
			},
		},

		statusHP: {
			type: Boolean,
			default: false,
		},

		dateOfDisposal: {
			type: Date,
		},
		disposalProceeds: {
			type: Number,
			default: 0,
		},
		profitLossOnSale: {
			type: Number,
			default: 0,
		},
		images: [
			{
				public_id: {
					type: String,
					required: false,
				},
				url: {
					type: String,
					required: false,
				},
			},
		],
	},
	{ timestamps: true }
);

export default mongoose.models.Asset || mongoose.model('Asset', AssetSchema);
