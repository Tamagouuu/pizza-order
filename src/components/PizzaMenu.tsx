import { Card, CardActions, CardContent, CardMedia, Container, Grid, Radio, Typography } from "@mui/material";
import { PIZZAS } from "../constants";
import { usePizza } from "../store/PizzaContext";
import { type Pizza } from "../store/PizzaContext";

function PizzaMenu() {
  const { selectedPizza, setSelectedPizza, setSelectedToppings } = usePizza();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const pizza = PIZZAS.filter((pizza) => pizza.id === event.target.value)[0];
    const formattedPizza: Pizza = {
      id: pizza.id,
      name: pizza.name,
      price: pizza.price,
      toppings: pizza.toppings,
    };

    setSelectedPizza(formattedPizza);
    setSelectedToppings([]);
  };

  return (
    <Container sx={{ pt: 3 }} maxWidth="lg">
      <Grid container spacing={4} justifyContent="center">
        {PIZZAS.map((pizza) => (
          <Grid item xs={12} sm={6} md={4} key={pizza.id}>
            <Card sx={{ height: "100%", display: "flex", flexDirection: "column" }}>
              <CardMedia
                component="div"
                sx={{
                  pt: "56.25%",
                }}
                image={pizza.image}
              />
              <CardContent sx={{ pb: 0 }}>
                <Typography variant="h5" component="h2" align="center">
                  {pizza.name}
                </Typography>
                <Typography variant="h6" component="h3" align="center">
                  ${pizza.price}
                </Typography>
              </CardContent>
              <CardActions sx={{ justifyContent: "center" }}>
                <Radio
                  checked={selectedPizza?.id === pizza.id}
                  value={pizza.id}
                  name="pizza-menu"
                  onChange={handleChange}
                />
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default PizzaMenu;
