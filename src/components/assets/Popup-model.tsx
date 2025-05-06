import React from 'react'
import { CloseIcon } from './icons'

const PopupModel = ({children}:any) => {
  return (
    <div className='flex items-center fixed bg-gray-900 opacity-80 top-0 left-0 right-0 bottom-0'>
        <div className="model-pop-up max-w-[60%] max-h-[60%] w-full h-fit bg-white border border-gray-400 p-8 mx-auto rounded-lg relative">
          <CloseIcon width="24px" height="24px" className="w-10 h-10 absolute top-0 right-0" />
          {children}
        </div>
    </div>
  )
}

export default PopupModel