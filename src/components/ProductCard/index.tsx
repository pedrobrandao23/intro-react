import "./styles.css";

interface ProductCardProps {
    picture: string;
    title: string;
    text: string;
    price: string;
}

function ProductCard(props: ProductCardProps) {
    return (
        <div className="product-card">
            <div className="card-content">
            <img src={props.picture}/>
            <h3>{props.title}</h3>
            <p>{props.text}</p>
            </div>
            <div className="bottom-line">
                <p>{props.price}</p>
                <a href="#">See more</a>
            </div>
        </div>

    );
}

export default ProductCard;