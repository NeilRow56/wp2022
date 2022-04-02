import React from 'react'

function CompletionReview() {
  return (
        <>
        <div className=' flex flex-col justify-end w-[350px] h-[90px] border border-gray-200 rounded-md absolute top-[66px] right-2 '>
            <div className='flex w-full border-b border-gray-100 h-10 space-x-4'>
                <h4>Prepared By :</h4>
                <h4>Neil </h4>
            <div>
                    <input type="date" />
            </div>
            </div>
            <div className='flex h-10 w-full border-b border-gray-100 space-x-4'>
                <h4>Reviewd By :</h4>
                <h4 className='pl-[6px]'>Neil </h4>
            <div>
                    <input type="date" />
            </div>
            </div>

        </div>
        {/* <div className=' flex flex-row w-full' >
            
                <span className='flex px-2 '>Prepared By: <h4 className='px-2'>Neil</h4></span>
          
            <div className='border border-gray-200'>
                <input type="date" />
            </div>

        </div>
        <div className=' flex flex-row w-full' >
            
                <span className='flex px-2'>Reviewed By: <h4 className='px-2'>Neil</h4></span>
          
            <div className='border border-gray-200'>
                <input type="date" />
            </div>

        </div> */}
        </>
  )
}

export default CompletionReview
