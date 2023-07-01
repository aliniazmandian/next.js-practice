import axios from "axios";
import User from "../../components/user/user";
import Link from "next/link";

const users = ({ userList }) => {

    
    return ( 
        <div>

            {userList.results.map(user => {
              return  <User key={user.id} userData = {user} />
            })}
            

        </div>
     );
}
 
export default users;

export async function getStaticProps() {

    const { data } = await axios.get('https://rickandmortyapi.com/api/character')
    // console.log(data);
    return {
        props:{
        userList:data
        }
    }
    
}