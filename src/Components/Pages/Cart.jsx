import { useSelector } from "react-redux"

useSelector

const Cart = () => {
  const cart = useSelector(state => state.cart)
  return (
    <div>
      {cart.products.length > 0 ? (
        <div>
          <h3>SHOPPING CART</h3>
          <div>
            <div>
              <p>PRODUCTS</p>
              <div>
                <p>Price</p>
                <p>PRICE</p>
                <p>SUBTOTAL</p>
                <p>REMOVE</p>
                </div>
                <div>
                {cart.products.map((product) =>(
                  <div>
                    <div>
                      <img src={product.image} alt="" />
                      <div><h3>{product.name}</h3></div>
                    </div>
                    <div>
                      <p>${product.price}</p>
                    </div>
                  </div>
                ))}
                </div>
            </div>
            <div></div>
          </div>
        </div>
      ) : (
        <div className="flex justify-center">
          <img src="/Images/emptyCart.jpg" alt="emptyCart" />
        </div>
      )}
    </div>
  );
}

export default Cart
