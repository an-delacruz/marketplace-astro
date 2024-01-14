import { addItemToCart } from "../stores/cart";

export const AddToCart = ({ item }: { item: ShopItem }) => {
  return (
    <>
      <button class='big-link' onClick={() => addItemToCart(item)}>
        Add To Cart
      </button>
    </>
  );
};
