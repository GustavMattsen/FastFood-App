import { useState } from "react";
import MenuItemCard from "./components/MenuItemCard";
import "./App.css";

function App() {
  const [menu] = useState([
    {
      id: 1,
      title: "Burger",
      description: "A delicious burger with all the fixings.",
      price: 79.99,
      imageUrl: "https://via.placeholder.com/150",
    },
    {
      id: 2,
      title: "Pizza",
      description: "Classic pizza with your favorite toppings.",
      price: 99.99,
      imageUrl: "https://via.placeholder.com/150",
    },
    {
      id: 3,
      title: "Fries",
      description: "Crispy golden fries served hot and fresh.",
      price: 59.99,
      imageUrl: "https://via.placeholder.com/150",
    },
  ]);

}