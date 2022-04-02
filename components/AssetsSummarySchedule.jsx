import Link from 'next/link'
import React from 'react'
import CompletionReview from './CompletionReview'

function AssetSchedule() {
  return (
    <div className='  pt-20 w-full relative'>
      <CompletionReview />
        <div className=' flex  flex-row text-center items-center justify-center'>
            <h1>Assets Summary</h1>
            <Link href='/assets' passHref>
              <button className='ml-3 h-10 cursor-pointer'>Plant Schedule</button>
            </Link>
            
        </div>
    </div>
  )
}

export default AssetSchedule