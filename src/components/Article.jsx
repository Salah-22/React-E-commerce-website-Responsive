import { useParams } from "react-router-dom";
import { useCart } from "../context/CartContext";
import ArticaleCSS from "./ArticaleCSS.module.css";
import Rating from "@mui/material/Rating";

const Article = () => {
  const { products, addToCart } = useCart();
  const { productId } = useParams();

  const product = products.find(
    (product) => product.id === parseInt(productId)
  );

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div className={ArticaleCSS.container}>
      <div className={ArticaleCSS.product_container}>
        <div className={ArticaleCSS.product_image}>
          <img src={product.image} alt="product image" />
        </div>

        <div className={ArticaleCSS.product_detailes}>
          <div className={ArticaleCSS.price}>{product.price}$</div>

          <div className={ArticaleCSS.title}>{product.title}</div>
          <div className={ArticaleCSS.rating}>
            {product.rating.rate}
            <Rating
              name="half-rating-read"
              defaultValue={product.rating.rate}
              precision={0.5}
              readOnly
            />
            <div className={ArticaleCSS.reviews}>
              {product.rating.count} Ratings
            </div>
          </div>
          <hr />
          <div className={ArticaleCSS.description}>{product.description}</div>
          <hr />
          <button onClick={() => addToCart(product.id)}>
            Add To Cart ({product.quantity})
          </button>
        </div>
      </div>
    </div>
  );
};

export default Article;
