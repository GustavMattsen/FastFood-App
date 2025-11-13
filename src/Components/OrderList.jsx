import OrderItem from "./OrderItem";

function OrderList({ order, onIncrease, onDecrease, total }) {
  return (
    <div className="order-section">
      {order.length === 0 ? (
        <p>No items added yet</p>
      ) : (
        <table>
          <thead>
            <tr>
              <th>Item</th>
              <th>Quantity</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            {order.map((item) => (
              <OrderItem
                key={item.id}
                item={item}
                onIncrease={onIncrease}
                onDecrease={onDecrease}
              />
            ))}
          </tbody>
        </table>
      )}
      <h3>Total: SEK {total.toFixed(2)}</h3>
    </div>
  );
}

export default OrderList;