
import Link from "next/link";

const Episode = ({episodeData}) => {
   console.log(episodeData);
    return ( 
        <div>
            <Link href={`/episode/${episodeData.id}`} >
                <h4>episode: {episodeData.episode} </h4>
            </Link>
            <hr />
        </div>
     );
}
 
export default Episode


