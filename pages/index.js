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
  const [isOpenAddItemDialog,setIsOpenAddItemDialog] = useState(false)
  const [priceInputData,setPriceInputData]=useState('')
  const [itemInputData,setItemInputData]=useState('')



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

  const priceData = (e) =>{
    setPriceInputData(e.target.value)
  }

  const itemData = (e) =>{
    setItemInputData(e.target.value)

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


const toggleItemDialogHandler = () => {
  isOpenAddItemDialog ? setIsOpenAddItemDialog(false) : setIsOpenAddItemDialog(true)
}

const deleteCategoryHandler=(categoryId)=>{
 
  console.log("delete ,category id: ",  categoryId);
  axios.delete(`api/menu/${categoryId}`).then((res)=>{
    setMenuData(res.data.menu)
  })
}

const editCategoryHandler=(categoryId)=>{
  console.log("edit ,category id: ", categoryId);
}

const deleteItemHandler= (itemId , categoryId)=>{
console.log("delete, item id :",itemId , categoryId  );

axios.delete(`api/menu/item/${itemId}?categoryId=${categoryId}`).then((res)=>{
  console.log(res.data.menu);
})


}

const editItemHandler=(itemId)=>{
  console.log("edite, item id :",itemId);
}







 if (isLoading){
  return <div> loading . . .</div>
 }

  return (
    <div className=' w-screen h-screen flex flex-col justify-start items-center pt-3 bg-orange-300 text-white'>
      ferdowsi cafe

      <div onClick={()=>toggleHandler()}  className=" bg-zinc-700 rounded-xl p-2 mb-3 mt-3 cursor-pointer " > 
      اضافه کردن دسته بندی جدید +
      </div>
     
      <Accordion allowMultipleExpanded ={true} className=" transition-all w-full max-w-lg " >


        {isEmptyCategory ? 
        
        <div> empty category </div> :

        menuData.map((category,index)=>{
          return <AccordionItem className="flex w-full flex-col justify-center items-center" key={category._id} >
          <AccordionItemHeading className="w-full" >
              <AccordionItemButton className="bg-white rounded-lg flex justify-center items-center m-2 p-1 pb-2" >


                <div onClick={(e)=>{e.stopPropagation(e)}}  className="text-zinc-700 " >
                  <button className="p-1 mr-2 border-2 rounded-xl border-zinc-700 " onClick={()=>deleteCategoryHandler(category._id)} >
                     <DeleteSVG  />
                  </button>
                </div>

                <div onClick={(e)=>{e.stopPropagation(e)}}  className="text-zinc-700 " >
                  <button className="p-1  border-2 rounded-xl border-zinc-700 " onClick={()=>editCategoryHandler(category._id)} >
                     <EditSVG/>
                  </button>
                </div>
              
              <div className="text-zinc-700 select-none w-full flex justify-end items-center "  > 
               {category.title}
               </div>

               
             
              </AccordionItemButton>
          </AccordionItemHeading >

          { menuData[index].items.length === 0  ?
           <AccordionItemPanel className="border-2 p-1 text-center w-[95%] rounded-lg  " >
             آبتمی وارد نشده 
             <div onClick={()=>toggleItemDialogHandler()} className=" cursor-pointer w-[150px] bg-zinc-700 text-center rounded-xl p-1 mt-1" >  اضافه کردن آیتم +</div>
              </AccordionItemPanel>
           
           : 
          

          menuData[index].items.map((item)=>{
            return <AccordionItemPanel key={item._id}>
  
            <div  className=" bg-orange-300 flex w-Full flex-col items-center justify-start " >
               <div className=" select-none flex flex-col items-center justify-start  h-full w-full bg-amber-950  " >
                     <div  className="flex w-[90%] bg-orange-900 rounded-lg m-2 justify-between items-center p-2 " >
                        <h3 className="  w-[50px]" >{item.price}</h3> 
                        <div className="  ">
                         <button className="rounded-xl border-2 p-1 mr-2" onClick={()=>deleteItemHandler(item._id,category._id )}   >
                          <DeleteSVG  />
                        </button>
                       <button  className="rounded-xl border-2 p-1 mr-2" onClick={()=>editItemHandler(item._id,index)} >
                          <EditSVG/>
                       </button>
                     </div>
                    <h3 className="  w-[70px] flex justify-end" >{item.title}</h3> 
                    </div>
              </div>
        </div> 
        <div className="w-full bg-zinc-700 text-center rounded-xl p-1 mt-1" > + اضافه کردن آیتم </div>
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

 
   <div onClick={()=>toggleItemDialogHandler()} className={`h-screen w-screen bg-black/50 flex justify-center items-center top-0 left-0 
   ${isOpenAddItemDialog ? "fixed" : "hidden" } z-10` }>
         <div onClick={(e)=>e.stopPropagation()}  className=" flex flex-col justify-center items-center rounded-lg absolute top-[50%] left[50%] w-[90%]  pt-5 pb-5 max-w-lg bg-gray-700" >
                 <div  className="w-full flex flex-col justify-center items-center h-full" >
                 <div className="w-full flex flex-col justify-center items-end p-2">
                <label className="" >  .نام آیتم را وارد کنید</label>
                <input onChange={(e)=>itemData(e)} className=" w-full mt-2 bg-white text-black "></input>
             </div>

             <div className="w-full flex flex-col justify-center items-end p-2">
                <label className="" >  .قیمت آیتم را وارد کنید</label>
                <input onChange={(e)=>priceData(e)} className=" w-full mt-2 bg-white text-black "></input>
             </div>

             <div onClick={()=>addCategoryHandler()} className=" text-center w-[90%] bg-slate-800 rounded-xl p-2  mt-3 " > 
                 ذخیره
            </div>
            <div onClick={()=>toggleItemDialogHandler()} className=" text-center w-[90%] bg-slate-800 rounded-xl p-2 mb-3 mt-3 " > 
                 انصراف
            </div>

        </div>

 </div>
   </div>

    </div>
  )
}
