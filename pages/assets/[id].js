import React from 'react';
import Image from 'next/image';
import axios from 'axios';

const AssetDetailPage = ({ asset }) => {
	return (
		<>
			<div className="max-w-[1440px] mx-auto px-4 flex flex-row py-24 text-left bg-green-100  h-full">
				<div className="flex min-w-[700px] flex-col ">
					<div className="flex text-[30px] font-bold mx-auto">
						<h4>Asset Information</h4>
					</div>
					<div className="flex  bg-blue-100 my-5 ">
						<div className="font-semibold min-w-[200px] px-2">
							Name:
						</div>
						<div className=" px-2">{asset.name}</div>
					</div>
					<div className="flex  bg-blue-100 mb-5 ">
						<div className="font-semibold min-w-[200px] max-w-[200px] px-2">
							Description and identification details:
						</div>
						<div className=" px-2">{asset.description}</div>
					</div>

					<div className="flex  bg-blue-100 mb-5">
						<div className="font-semibold min-w-[200px] px-2">
							Date acquired:
						</div>
						<div className=" px-2">{asset.dateAcquired}</div>
					</div>
					<div className="flex  bg-blue-100 mb-5">
						<div className="font-semibold min-w-[200px] px-2">
							Cost (£):
						</div>
						<div className=" px-2">{asset.cost}</div>
					</div>
					<div className="flex  bg-blue-100 mb-5">
						<div className="font-semibold min-w-[200px] px-2">
							Asset Category:
						</div>
						<div className=" px-2">Plant and Equipment</div>
					</div>
					<div className="flex  bg-blue-100 mb-5">
						<div className="font-semibold min-w-[200px] px-2">
							Depreciation method:
						</div>
						<div className=" px-2">Reducing balance</div>
					</div>
					<div className="flex  bg-blue-100 mb-5">
						<div className="font-semibold min-w-[200px] px-2">
							Depreciation rate (%):
						</div>
						<div className=" px-2">25</div>
					</div>
					<div className="flex  bg-blue-100 mb-5">
						<div className="font-semibold min-w-[200px] px-2">
							Revaluation date :
						</div>
						<div className=" px-2">N/A</div>
					</div>
					<div className="flex  bg-blue-100 mb-5">
						<div className="font-semibold min-w-[200px] px-2">
							Revaluation Amount :
						</div>
						<div className=" px-2">N/A</div>
					</div>
					<div className="flex  bg-blue-100 mb-5">
						<div className="font-semibold min-w-[200px] px-2">
							Hire Purchase (current) :
						</div>
						<div className=" px-2">No</div>
					</div>
				</div>
				<div className="flex flex-col w-1/4 bg-pink-100 h-[200px] ">
					<div className="flex text-[30px] font-bold mx-auto">
						<h4>Disposal Information</h4>
					</div>
					<div className="flex  bg-blue-100 my-5">
						<div className="font-semibold min-w-[200px] px-2">
							Date of disposal:
						</div>
						<div className=" px-2">25/03/2021</div>
					</div>
					<div className="flex  bg-blue-100 mb-5">
						<div className="font-semibold min-w-[200px] px-2">
							Disposal proceeds (£):
						</div>
						<div className=" px-2">85125</div>
					</div>
					<div className="flex  bg-blue-100 mb-5">
						<div className="font-semibold min-w-[200px] px-2">
							Written down value (£):
						</div>
						<div className=" px-2">{asset.writtenDownValue}</div>
					</div>
					<div className="flex  bg-blue-100 mb-24">
						<div className="font-semibold min-w-[200px] px-2">
							Profit/(Loss) on sale (£):
						</div>
						<div className=" px-2">11125</div>
					</div>
					<div className="flex text-[20px] font-bold mx-auto">
						<h4>Documentation- pdf etc;</h4>
					</div>
					<div className="flex  bg-blue-100 mb-5">
						<div className="font-semibold min-w-[200px] px-2">
							Images:
						</div>
						<div className=" px-2"></div>
					</div>
				</div>
				<div className="flex flex-col w-1/4 bg-yellow-100 h-[210px] ">
					<div className="flex text-[30px] font-bold  mx-auto">
						<h4>Depreciation </h4>
					</div>
					<div className="flex  bg-blue-100 my-5">
						<div className="font-semibold min-w-[70px] px-2">
							Cost
						</div>
						<div className="font-semibold min-w-[70px] px-2">
							Depreciation
						</div>
						<div className="flex  bg-blue-100 mb-5">
							<div className="font-semibold min-w-[70px] px-2">
								WDV (£):
							</div>
							<div className=" px-2">
								{asset.writtenDownValue}
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export const getServerSideProps = async ({ params }) => {
	const res = await axios.get(
		`http://localhost:3000/api/assets/${params.id}`
	);
	return {
		props: {
			asset: res.data,
		},
	};
};

export default AssetDetailPage;
