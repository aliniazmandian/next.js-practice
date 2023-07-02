import axios from "axios";
import { useRouter } from "next/router";


const SingleProduct = ({ product }) => {
    console.log(product);
    const router = useRouter();

    if (router.isFallback) {
        return <div>Loading . . . </div>
    }

    return ( 
        <div>
           price:  {product.price}
        </div>
     );
}
 
export default SingleProduct;

export async function getStaticPaths() {
    return {
        paths: [{ params: { productId: "1" } }],
        fallback : true
    }
}

export async function getStaticProps(contex) {
    const { params } = contex
    const { data } = await axios.get(`http://localhost:4000/products/${params.productId}`)
    return {
        props:{product:data}
    }
}