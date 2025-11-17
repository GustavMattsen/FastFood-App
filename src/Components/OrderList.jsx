import OrderItem from "./OrderItem";

function OrderList({ order, onIncrease, onDecrease, total }) {
  return (
    <div className="order-container">
      <h2>Your Order</h2>

      {order.length === 0 ? (
        <p>No items added yet.</p>
      ) : (
        <table className="order-table">
          <thead>
            <tr>
              <th>Item</th>
              <th>Qty</th>
              <th>Total</th>
            </tr>
          </thead>

          <tbody>
            {order.map((item) => (
              <OrderItem
                key={item.id}
                item={item}
                onIncrease={() => onIncrease(item.id)}
                onDecrease={() => onDecrease(item.id)}
              />
            ))}
          </tbody>
        </table>
      )}

      <h3 className="total">Total: SEK {total.toFixed(2)}</h3>
    </div>
  );
}

export default OrderList;
