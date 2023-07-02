
import Link from "next/link";

const Episode = ({episodeData}) => {
//    console.log(episodeData);
    return ( 
        <div>
            <Link href={`/episodes/${episodeData.id}`} >
                <h4>episode: {episodeData.episode} </h4>
            </Link>
            <hr />
        </div>
     );
}
 
export default Episode


