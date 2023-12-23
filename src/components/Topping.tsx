import { Box, Checkbox, Container, FormControlLabel, FormGroup, Grid } from "@mui/material";
import { TOPPINGS } from "../constants";
import { usePizza } from "../store/PizzaContext";
import { useEffect, useState } from "react";

function Topping() {
  const { selectedPizza, setSelectedToppings } = usePizza();

  const [checkedState, setCheckedState] = useState(
    TOPPINGS.map((topping) => {
      return { ...topping, status: false };
    })
  );

  function handleOnChange(position: number) {
    const updatedCheckedState = checkedState.map((item, index) =>
      index === position ? { ...item, status: !item.status } : { ...item }
    );

    const relatedToppings = updatedCheckedState.filter(
      (topping) => selectedPizza?.toppings.includes(topping.id) && topping.status
    );

    setCheckedState(updatedCheckedState);
    setSelectedToppings(relatedToppings);
  }

  useEffect(() => {
    setCheckedState((state) => {
      return state.map((item) => ({ ...item, status: false }));
    });
  }, [selectedPizza?.id]);

  return (
    <Container maxWidth="lg">
      <Box boxShadow={2} borderRadius={1} padding={2} marginTop={3}>
        <FormGroup>
          <Grid container spacing={2} alignItems="center" justifyContent="center">
            {TOPPINGS.map((topping, index) => (
              <Grid item md={3} key={topping.name}>
                <FormControlLabel
                  control={<Checkbox />}
                  label={topping.name}
                  disabled={!selectedPizza || !selectedPizza?.toppings.includes(topping.id)}
                  checked={checkedState[index].status}
                  onChange={() => handleOnChange(index)}
                />
              </Grid>
            ))}
          </Grid>
        </FormGroup>
      </Box>
    </Container>
  );
}

export default Topping;
