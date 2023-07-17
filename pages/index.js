import Link from "next/link";
import { useState } from "react";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from 'react-accessible-accordion';
import DeleteSVG from "../components/deleteSVG";
import EditSVG from "../components/editSVG";



export default function Home() {

  
  

  const [data,setData] = useState()
  const [isLoading,setIsloading] = useState(true)
  

  const  addCategoryHandler = ()=>{

  }

  return (
    <div className=' w-screen h-screen flex flex-col justify-start items-center pt-3 bg-orange-300 text-white'>
      ferdowsi cafe

      <div onClick={()=>addCategoryHandler()}  className=" bg-slate-800 rounded-xl p-2 mb-3 mt-3 " > 
      اضافه کردن دسته بندی جدید +
      </div>
     
      <Accordion allowMultipleExpanded ={true} className=" transition-all w-full max-w-lg " >
            <AccordionItem>
                <AccordionItemHeading>
                    <AccordionItemButton className="bg-white rounded-lg flex justify-center items-center m-2 p-1 pb-2" >
                    <h1 className="text-orange-950" >نوشیدنی های بر پایه قهوه</h1>
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                <div className=" bg-orange-300 flex w-Full flex-col items-center justify-start " >
                   <div className="  flex flex-col items-center justify-start  h-full w-full bg-amber-950  " >
                     
                       
                         <div  className="flex w-[90%] bg-orange-900 rounded-lg m-2 justify-between items-center p-2 " >
                            <h3 className="  w-[50px]" >20000</h3> 
                            <div className="  ">
                             <button onClick={()=>deleteHAndler()} >
                              <DeleteSVG />
                            </button>
                           <button onClick={()=>editHandler()} >
                              <EditSVG/>
                           </button>
                         </div>
                        <h3 className="  w-[70px] flex justify-end" >name</h3> 
                        </div>
          
                  </div>
            </div> 
                </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem>
                <AccordionItemHeading>
                    <AccordionItemButton className="bg-white rounded-lg flex justify-center items-center m-2 p-1 pb-2">
                        Is free will real or just an illusion?  +
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                    <p>
                        In ad velit in ex nostrud dolore cupidatat consectetur
                        ea in ut nostrud velit in irure cillum tempor laboris
                        sed adipisicing eu esse duis nulla non.
                    </p>
                </AccordionItemPanel>
            </AccordionItem>
        </Accordion>

    </div>
  )
}
