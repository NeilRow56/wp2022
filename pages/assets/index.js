import React from 'react';
import AssetList from '../../components/AssetList';
import axios from 'axios';

function AssetListing({ assetList }) {
	return <AssetList assetList={assetList} />;
}

export default AssetListing;

export const getServerSideProps = async () => {
	const res = await axios.get('http://localhost:3000/api/assets');
	return {
		props: {
			assetList: res.data,
		},
	};
};
