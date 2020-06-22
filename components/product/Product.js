import Link from 'next/link'
import './product.css'
const Product = (props) => {
    const {product} = props;

    return (
        <article className="card">
            <Link as={`/product?slug=${product.slug}-${product.id}`} href={`/product?slug=${product.slug}-${product.id}`}>
                <a>
                    <div className="product-image">
                        <img className='resize' src={product.image.sourceUrl} alt="A banana that looks like a bird" />
                    </div>
                    <div className="card-content">
                        <h2>{product.name}</h2>
                        <p>TUX re-inventing the wheel, and move the needle. creep dogpile that but diversify kpis but market-facing.</p>
                    </div>
                </a>
            </Link>
        </article>
    )

}
export default Product;