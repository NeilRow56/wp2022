import React from 'react'
import AssetCard from './AssetCard'

const AssetList = ({ assetList}) => {
  return (
    <div className='w-full pt-20 bg-white h-full'>
    <div className='flex flex-col text-center  max-w-[1500px] mx-auto bg-white'>
        <h1 className='text-yellow-400'>PLANT AND EQUIPMENT SCHEDULE</h1>
        <p className='text-[#444]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus ipsam ratione, dolorem harum exercitationem repellendus repellat veritatis aut distinctio at, beatae amet consectetur voluptates iste. </p>
    
    <div className='flex flex-col text-left space-between my-5'>
    <div className='w-full text-center font-bold flex space-x-2'>
      <div className='w-[150px] text-blue-700 '>Asset Description</div>
      <div className='w-[100px] text-blue-700 '>Cost/   Valuation</div>
      <div className='w-[100px] text-blue-700 '>Revaluation</div>
      <div className='w-[100px] text-blue-700 '>Additions</div>
      <div className='w-[100px] text-blue-700 '>Disposals</div>
      <div className='w-[100px] text-blue-700 '>Cost/value carried fwd</div>
      <div className='w-[100px] text-red-700 '>Acc Dep&apos;n b/fwd</div>
      <div className='w-[100px] text-red-700 '>Adjustment - revaluation</div>
      <div className='w-[100px] text-red-700 '>Charge for Period</div>
      <div className='w-[100px] text-red-700 '>Eliminated on disposals</div>
      <div className='w-[100px] text-red-700 '>Acc Depn carried fwd</div>
      <div className='w-[100px] text-green-700 '>Net Book Value b/fwd</div>
      <div className='w-[100px] text-green-700 '>Net Book Value c/fwd</div>
      
    </div>
    <div className='w-full text-center font-bold flex space-x-2'>
      <div className='w-[150px]  '></div>
      <div className='w-[100px]  '>£</div>
      <div className='w-[100px]  '>£</div>
      <div className='w-[100px]  '>£</div>
      <div className='w-[100px]  '>£</div>
      <div className='w-[100px]  '>£</div>
      <div className='w-[100px]  '>£</div>
      <div className='w-[100px]  '>£</div>
      <div className='w-[100px]  '>£</div>
      <div className='w-[100px]  '>£</div>
      <div className='w-[100px]  '>£</div>
      <div className='w-[100px]  '>£</div>
      <div className='w-[100px]  '>£</div>
     </div> 
    <div className='flex flex-col'>
      {assetList.map(asset => (
        <AssetCard key={asset._id} asset={asset}/>
      ))}
    
        
    </div>
    <div className='flex flex-col border-t border-b-2 border-gray-700 text-left space-between my-5'>
    <div className='w-full text-left font-bold flex space-x-2'>
      <div className='w-[150px]  '>Totals</div>
      <div className='w-[100px] text-right  '>10000000</div>
      <div className='w-[100px] text-right  '>10000000</div>
      <div className='w-[100px] text-right  '>10000000</div>
      <div className='w-[100px] text-right text-red-700 '>10000000</div>
      <div className='w-[100px] text-right  '>10000000</div>
      <div className='w-[100px] text-right  text-righttext-red-700 '>10000000</div>
      <div className='w-[100px] text-right '>10000000</div>
      <div className='w-[100px] text-right text-red-700 '>10000000</div>
      <div className='w-[100px] text-right '>10000000</div>
      <div className='w-[100px] text-right text-red-700'>10000000</div>
      <div className='w-[100px]  text-right '>10000000</div>
      <div className='w-[100px]  text-right '>10000000</div>
      
    </div>    
    </div>   
        
        
       
       
        </div>
    </div>

    </div>
  )
}

export default AssetList