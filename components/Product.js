import Link from 'next/link'

const Product = (props) => {
    const {product} = props;

    return (
            <div>
                    <h3>{product.name}</h3> 
                    <Link as={`/product/${product.slug}-${product.id}`} href={`/product?slug=${product.slug}-${product.id}`}>
                        <a>
                           aaaaa
                        </a>
                    </Link>
                  
            </div>
    )

}
export default Product;