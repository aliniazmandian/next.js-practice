import axios from "axios";
import Episode from "../../components/eisodes/episode";

const Episodes = ({episodes}) => {
    // console.log(episodes);
    return ( 
        <div>
            {
                episodes.results.map(episode => {
                    return <Episode key ={episode.id} episodeData ={episode}/>
                })
            }
        </div>
     );
}
 
export default Episodes;

export async function getStaticProps() {
    const { data } = await axios.get("https://rickandmortyapi.com/api/episode")
    return {
        props: {
            episodes: data
        }
    }
}