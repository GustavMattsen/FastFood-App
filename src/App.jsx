import { useState, useEffect } from "react";
import MenuItemCard from "./components/MenuItemCard.jsx";
import OrderList from "./components/OrderList.jsx";
import "./App.css";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    document.body.className = darkMode ? "dark" : "light";
  }, [darkMode]);

  const [menu] = useState([
    {
      id: 1,
      title: "Burger",
      description: "A juicy burger with cheese.",
      price: 79.99,
      imageUrl: "https://placehold.co/150",
    },
    {
      id: 2,
      title: "Pizza",
      description: "Classic cheese pizza.",
      price: 99.99,
      imageUrl: "https://placehold.co/150",
    },
    {
      id: 3,
      title: "Fries",
      description: "Crispy golden french fries.",
      price: 59.99,
      imageUrl: "https://placehold.co/150",
    },
  ]);

  const [order, setOrder] = useState([]);

  const addToOrder = (item) => {
    const exists = order.find((o) => o.id === item.id);

    if (exists) {
      setOrder(
        order.map((o) =>
          o.id === item.id ? { ...o, quantity: o.quantity + 1 } : o
        )
      );
    } else {
      setOrder([...order, { ...item, quantity: 1 }]);
    }
  };

  const changeQuantity = (id, amount) => {
    setOrder((prev) =>
      prev
        .map((item) =>
          item.id === id
            ? { ...item, quantity: Math.max(item.quantity + amount, 0) }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  const total = order.reduce(
    (sum, item) => sum + item.quantity * item.price,
    0
  );

  return (
    <div className="App">
      <header className="header">
        <h1>Fast Food Menu</h1>
        <button onClick={() => setDarkMode(!darkMode)}>
          {darkMode ? "Light Mode" : "Dark Mode"}
        </button>
      </header>

      <div className="menu-container">
        {menu.map((item) => (
          <MenuItemCard
            key={item.id}
            imageUrl={item.imageUrl}
            title={item.title}
            description={item.description}
            price={item.price}
            onAdd={() => addToOrder(item)}
          />
        ))}
      </div>

      <OrderList
        order={order}
        onIncrease={(id) => changeQuantity(id, +1)}
        onDecrease={(id) => changeQuantity(id, -1)}
        total={total}
      />
    </div>
  );
}

export default App;
