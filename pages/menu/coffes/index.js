import axios from "axios";
import { useEffect, useState } from "react";
import DeleteSVG from "../../../components/deleteSVG";
import  EditSVG  from "../../../components/editSVG";

import React from 'react'


 const Coffes = () => {
    const [data,setData] = useState()
    const [isLoading,setIsloading] = useState(true)

useEffect(()=>{
   axios.get("/api/menu")
   .then((res)=>{ 
    setData(res.data)
    setIsloading(false)
})
   .catch((err)=>console.log(err))
},[])


const editHandler=()=>{
console.log("edit");
} 
  const deleteHAndler= (id)=>{
console.log("delete");
axios.delete(`/api/coffes/${id}`).then((res)=>{
    console.log(res.data);
    setData(res.data)
})
}

   
    if(isLoading) return <div>loading...</div>

    return ( 
        <div className=" bg-orange-300 flex h-screen w-screen flex-col items-center justify-start " >
            <h1 className="text-orange-950" >نوشیدنی های بر پایه قهوه</h1>
            <div className=" rounded-xl flex flex-col items-center justify-start  h-full w-80 bg-amber-950 mt-2 " >
                <div className="flex w-[90%] justify-between p-5 ml-2 mr-2 " > <h3>قیمت</h3> <h3>گرم</h3>  </div>
                <hr className="w-[85%]"></hr>
                {data.coffes.map(coffe => {
                    return <div key={coffe.id} className="flex w-[90%] bg-orange-900 rounded-lg m-2 justify-between items-center p-5 " >
                        <h3 className="  w-[50px]" >{coffe.price}</h3> 
                        <div className="  ">
                        <button onClick={()=>deleteHAndler(coffe.id)} >
                             <DeleteSVG />
                        </button>
                        <button onClick={()=>editHandler()} >
                           <EditSVG/>
                        </button>
                        </div>
                        
                        <h3 className="  w-[70px] flex justify-end" >{coffe.name}</h3> 
                        </div>
                })}
               
            </div>
        </div> 
     );
}
    
export default Coffes
