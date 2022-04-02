import React from 'react'
import Link from 'next/link'

function AssetCard({asset}) {
  return (
    <div className='w-full flex   border border-gray-100 space-x-2'>
      <div className='w-[150px] font-semibold'>{asset.name}</div>
      <div className='w-[100px] text-right'>{asset.cost}</div>
      <div className='w-[100px] text-right '>{}</div>
      <div className='w-[100px] text-right '>{}</div>
      <div className='w-[100px] text-right  text-red-700'>{}</div>
      <div className='w-[100px] text-right '>10000000</div>
      <div className='w-[100px] text-right  text-red-700'>10000000</div>
      <div className='w-[100px] '>{}</div>
      <div className='w-[100px] text-right  text-red-700'>{}</div>
      <div className='w-[100px] text-right   '>{}</div>
      <div className='w-[100px]  text-right text-red-700 '>10000000</div>
      <div className='w-[100px] text-right '>{asset.writtenDownValue}</div>
      <div className='w-[100px] text-right'>10000000</div>
      <Link href={`/assets/${asset._id}`} passHref >
      <button>EDIT</button>
      </Link>
      
    </div>
  )
}

export default AssetCard