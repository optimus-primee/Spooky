import React from 'react'
import {AiOutlinePlus} from "react-icons/ai"
import { IconContext } from 'react-icons/lib'
function Faq() {
  return (
    <div>
        <div>
        <h4 className='font-mplus text-[40px] uppercase text-secondary font-extrabold text-center '>FREQUENTLY ASKED QUESTION</h4>
            <div className='flex justify-center items-center flex-col gap-7 mt-7'>
               
                <div className='w-[900px] h-[80px] bg-[#F2594B] rounded-[26px] flex justify-between items-center px-14'>
                    <h5 className='font-mplus text-[20px] text-white font-black'>What is spook koalas?</h5>
                 <IconContext.Provider value={{size:"30px",color:"white"}}>
                 <AiOutlinePlus/>
                 </IconContext.Provider>

                </div>
                <div className='w-[900px] h-[80px] bg-[#F2594B] rounded-[26px] flex justify-between items-center px-14'>
                    <h5 className='font-mplus text-[20px] text-white font-black'>What is spook koalas?</h5>
                 <IconContext.Provider value={{size:"30px",color:"white"}}>
                 <AiOutlinePlus/>
                 </IconContext.Provider>

                </div>
               
                <div className='w-[900px] h-[80px] bg-[#F2594B] rounded-[26px] flex justify-between items-center px-14'>
                    <h5 className='font-mplus text-[20px] text-white font-black'>What is spook koalas?</h5>
                 <IconContext.Provider value={{size:"30px",color:"white"}}>
                 <AiOutlinePlus/>
                 </IconContext.Provider>

                </div>
            </div>
        </div>
    </div>
  )
}

export default Faq