import axios from "axios";
import useSWR  from "swr";


const fetcher = async()=> {
  const {data}  =await axios.get('/api/coffes')
     return data
}


const coffes = () => {

    const {error,data} = useSWR("getCoffes",fetcher)

    if (error) return <div> data is missing.</div>
    if(!data) return <div>loading...</div>

    return ( 
        <div className=" bg-orange-300 flex h-screen w-screen flex-col items-center justify-start " >
            <h1 className="text-orange-950" >نوشیدنی های بر پایه قهوه</h1>
            <div className=" rounded-xl container h-full w-80 bg-amber-950 mt-2 " >
                <div className="flex justify-between p-5 " > <h3>قیمت</h3> <h3>گرم</h3>  </div>
                <hr></hr>
                {data.coffes.map(coffe => {
                    return <div key={coffe.id} className="flex justify-between p-5 " > <h3>{coffe.price}</h3> <h3>{ coffe.name}</h3>  </div>
                })}
               
            </div>
        </div> 
     );
}
 
export default coffes;