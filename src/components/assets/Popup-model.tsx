import React from 'react'

const PopupModel = ({children}:any) => {
  return (
    <div className='flex items-center justify-center fixed bg-gray-900 opacity-80 top-0 left-0 right-0 bottom-0'>
        <div className="model-pop-up max-w-[60%] max-h-[60%] bg-white border border-gray-400 p-4 h-full w-full mx-auto rounded-lg">
        {children}
        </div>
    </div>
  )
}

export default PopupModel