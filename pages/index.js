import Link from "next/link";
import { useEffect, useState } from "react";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from 'react-accessible-accordion';
import DeleteSVG from "../components/deleteSVG";
import EditSVG from "../components/editSVG";
import axios from "axios";



export default function Home() {

  
  

  const [menuData,setMenuData] = useState('')
  const [isEmptyCategory,setIsEmptyCategory]=useState(true)
  const [isLoading,setIsloading] = useState(true)
  const [inputData,SetInputData] = useState('')
  const [isOpenCategoryDialog,setIsOpenCategoryDialog]= useState(false)



  useEffect(()=>{
    axios.get('api/menu/').then((res)=>{
      console.log(res.data.menu);
      setMenuData(res.data.menu)
      setIsloading(false)
      if (!res.data.menu ){
        setIsEmptyCategory(true)
      } else {
        setIsEmptyCategory(false)
      }
    })
  },[])

  


  const changeHandler = (e)=>{
    SetInputData(e.target.value)
  }

  const  addCategoryHandler = ()=>{

    console.log(inputData);
    
    axios.post('api/menu/', {inputData}).then((res)=>{
        console.log(res.data.menu);
    })

  }

 const toggleHandler = ()=>{
   isOpenCategoryDialog ? setIsOpenCategoryDialog (false) : setIsOpenCategoryDialog (true)
   
 }


 if (isLoading){
  return <div> loading . . .</div>
 }



  

  return (
    <div className=' w-screen h-screen flex flex-col justify-start items-center pt-3 bg-orange-300 text-white'>
      ferdowsi cafe

      <div onClick={()=>toggleHandler()}  className=" bg-slate-800 rounded-xl p-2 mb-3 mt-3 " > 
      اضافه کردن دسته بندی جدید +
      </div>
     
      <Accordion allowMultipleExpanded ={true} className=" transition-all w-full max-w-lg " >


        {isEmptyCategory ? 
        
        <div> empty category </div> :

        menuData.map((category,index)=>{
          return <AccordionItem key={category._id} >
          <AccordionItemHeading>
              <AccordionItemButton className="bg-white rounded-lg flex justify-center items-center m-2 p-1 pb-2" >
             
              <div className="text-orange-950 w-full flex justify-between items-center "  > 
              <button onClick={()=>deleteHAndler()} >
                        <DeleteSVG />
              </button>
               {category.title}
               </div>
             
              </AccordionItemButton>
          </AccordionItemHeading>

          { menuData[index].items.length === 0  ? <AccordionItemPanel > آبتمی وارد نشده  </AccordionItemPanel> : 
          

          menuData[index].items.map((item)=>{
            return <AccordionItemPanel key={item._id}>
  
            <div  className=" bg-orange-300 flex w-Full flex-col items-center justify-start " >
               <div className="  flex flex-col items-center justify-start  h-full w-full bg-amber-950  " >
                     <div  className="flex w-[90%] bg-orange-900 rounded-lg m-2 justify-between items-center p-2 " >
                        <h3 className="  w-[50px]" >{item.price}</h3> 
                        <div className="  ">
                         <button onClick={()=>deleteHAndler()} >
                          <DeleteSVG />
                        </button>
                       <button onClick={()=>editHandler()} >
                          <EditSVG/>
                       </button>
                     </div>
                    <h3 className="  w-[70px] flex justify-end" >{item.title}</h3> 
                    </div>
              </div>
        </div> 
  
            </AccordionItemPanel>
          })
          
          }

       
          


      </AccordionItem>
        })
        
      }

      </Accordion>
<div onClick={()=>toggleHandler()} className={`h-screen w-screen bg-black/50 flex justify-center items-center top-0 left-0 
${isOpenCategoryDialog ? "fixed" : "hidden" } z-10` }>
<div onClick={(e)=>e.stopPropagation()}  className=" flex flex-col justify-center items-center rounded-lg absolute top-[50%] left[50%] w-[90%]  pt-5 pb-5 max-w-lg bg-gray-700" >
 <div  className="w-full flex flex-col justify-center items-center h-full" >
             <div className="w-full flex flex-col justify-center items-end p-2">
                <label className="" >  .نام دسته بندی را وارد کنید</label>
                <input onChange={(e)=>changeHandler(e)} className=" w-full mt-2 bg-white text-black "></input>
             </div>

             <div onClick={()=>addCategoryHandler()} className=" text-center w-[90%] bg-slate-800 rounded-xl p-2  mt-3 " > 
                 ذخیره
            </div>
            <div onClick={()=>toggleHandler()} className=" text-center w-[90%] bg-slate-800 rounded-xl p-2 mb-3 mt-3 " > 
                 انصراف
            </div>

        </div>

 </div>
   </div>

 
        

    </div>
  )
}
