import axios from "axios";

const Episode = ({ episodes }) => {
    
    console.log(episodes);

    return ( 
        <div>
            name: {episodes.name} - date:{episodes.air_date} 
        </div>
     );
}
 
export default Episode;

export async function getStaticPaths() {
    const { data } = await axios.get("https://rickandmortyapi.com/api/episode")
    const paths = data.results.map((ep) => {
        console.log(ep.id);
        return { params: { episodeId: `${ep.id}` } }
    });

    return {
        paths,
        fallback:false
    }
}

export async function getStaticProps(contex) {
    const { params } = contex;
    const { data } = await axios.get(`https://rickandmortyapi.com/api/episode/${params.episodeId}`)
    return {
        props: {
            episodes: data
        }
    }
}