import { CloseIcon } from './icons'

const PopupModel = ({children, handelClose, setShowPopUpModel}:any) => {
  return (
    <div className='relative'>
      <div onClick={()=>setShowPopUpModel(false)} className='fixed bg-gray-900 opacity-80 top-0 left-0 right-0 bottom-0'></div>
      <div className="model-pop-up w-[60%] bg-white border border-gray-400 p-8 mx-auto rounded-lg absolute bottom-0 left-1/2 -translate-y-1/2 -translate-x-1/2">
        <CloseIcon onClick={handelClose} width="24px" height="24px" className="w-10 h-10 absolute top-0 right-0" />
        {children}
      </div>
    </div>
  )
}

export default PopupModel