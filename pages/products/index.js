import axios from "axios";
import Link from "next/link";

const Products = ({ products }) => {
    // console.log(products);
    return ( 
        <div>
            {products.map((product) => {
                return<Link key={product.id} href={`/products/${product.id}`} passHref  >
                              <a> {product.title} </a>
                            </Link>
            })}
        </div>
     );
}
 
export default Products;

export async function getStaticProps() {
    const { data } = await axios.get("http://localhost:4000/products")
    return {
        props: {
            products:data
        }
    }
}