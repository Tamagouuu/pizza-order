import Navbar from "./components/Navbar";
import PizzaMenu from "./components/PizzaMenu";
import Price from "./components/Price";
import Size from "./components/Size";
import Topping from "./components/Topping";

function App() {
  return (
    <>
      <Navbar />
      <PizzaMenu />
      <Size />
      <Topping />
      <Price />
    </>
  );
}

export default App;
