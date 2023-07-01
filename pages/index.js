
import axios from 'axios'
import styles from '../styles/Home.module.css'

export default function Home({userList}) {

// console.log(userList);
  return (
    <div className={styles.container}>
      {
        userList.results.map(user => {
          return <div key={user.id} >name: {user.name}- status: { user.status}</div>
        })
      }
    </div>
  )
}

export async function getStaticProps() {
  const {data} = await axios.get("https://rickandmortyapi.com/api/character")
  // console.log(data);
  return {
    props: {
      userList: data,
    },
  };
}
