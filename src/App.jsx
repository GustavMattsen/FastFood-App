import { useState } from "react";
import "./App.css";

function App() {
  const [menu] = useState([
    {
      id: 1,
      name: "Burger",
      description: "A delicious burger with all the fixings.",
      price: 79.99,
      image: "placeholder",
    },
    {
      id: 2,
      name: "Pizza",
      description: "Classic pizza with your favorite toppings.",
      price: 99.99,
      image: "placeholder",
    },
    {
      id: 3,
      name: "Fries",
      description: "Crispy golden fries served hot and fresh.",
      price: 59.99,
      image: "placeholder",
    },
  ]);

  const [order, setOrder] = useState([]);

  const addToOrder = (item) => {
    const existing = order.find((i) => i.id === item.id);
    if (existing) {
      setOrder(
        order.map((i) =>
          i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
        )
      );
    } else {
      setOrder([...order, { ...item, quantity: 1 }]);
    }
  };

}
