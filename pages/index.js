import Link from "next/link";


export default function Home() {
  return (
    <div className=' w-screen h-screen flex flex-col justify-start items-center pt-3 '>
      ferdowsi cafe
      <hr className="bg-white" ></hr>
      <Link href={`/coffes`}  >
        <a className=" hover:text-orange-400 " >نوشیدنی های بر پایه قهوه</a>
      </Link>
    </div>
  )
}
