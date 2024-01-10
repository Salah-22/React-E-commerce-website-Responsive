import { useParams } from "react-router-dom";
import { useCart } from "../../context/CartContext";
import ShopItemDetailsCSS from "./ShopItemDetailsCSS.module.css";
import Rating from "@mui/material/Rating";

const ShopItemDetails = () => {
  const { products, addToCart } = useCart();
  const { productId } = useParams();

  const product = products.find(
    (product) => product.id === parseInt(productId)
  );

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div className={ShopItemDetailsCSS.container}>
      <div className={ShopItemDetailsCSS.product_container}>
        <div className={ShopItemDetailsCSS.product_image}>
          <img src={product.image} alt="product image" />
        </div>

        <div className={ShopItemDetailsCSS.product_detailes}>
          <div className={ShopItemDetailsCSS.price}>{product.price}$</div>

          <div className={ShopItemDetailsCSS.title}>{product.title}</div>
          <div className={ShopItemDetailsCSS.rating}>
            {product.rating.rate}
            <Rating
              name="half-rating-read"
              defaultValue={product.rating.rate}
              precision={0.5}
              readOnly
            />
            <div className={ShopItemDetailsCSS.reviews}>
              {product.rating.count} Ratings
            </div>
          </div>
          <hr />
          <div className={ShopItemDetailsCSS.description}>
            {product.description}
          </div>
          <hr />
          <button onClick={() => addToCart(product.id)}>
            Add To Cart ({product.quantity})
          </button>
        </div>
      </div>
    </div>
  );
};

export default ShopItemDetails;
