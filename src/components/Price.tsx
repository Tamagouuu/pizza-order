import { Container, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { usePizza } from "../store/PizzaContext";

function Price() {
  const { selectedPizza, selectedSize, selectedToppings } = usePizza();
  const [total, setTotal] = useState(0);

  useEffect(() => {
    if (selectedPizza?.id) {
      setTotal(0);
      setTotal((total) => (total += selectedPizza.price));
      if (selectedSize === "small") {
        setTotal((total) => total - 1);
      } else if (selectedSize === "large") {
        setTotal((total) => total + 2);
      }
      if (selectedToppings) {
        let totalTopping = 0;
        selectedToppings.forEach((topping) => (totalTopping += topping.price));
        setTotal((total) => (total += totalTopping));
      }
    }
  }, [selectedPizza?.id, selectedPizza?.price, selectedSize, selectedToppings]);

  return (
    <Container sx={{ py: 3 }} maxWidth="lg">
      <Typography variant="h5" component="h2">
        Price
      </Typography>
      <Typography variant="h4" component="h3" fontWeight={600}>
        ${total}
      </Typography>
    </Container>
  );
}

export default Price;
