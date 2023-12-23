import { Box, Container, FormControl, FormControlLabel, Radio, RadioGroup, Typography } from "@mui/material";
import { usePizza } from "../store/PizzaContext";

function Size() {
  const { selectedSize, setSelectedSize } = usePizza();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedSize(event.target.value);
  };

  return (
    <Container maxWidth="sm">
      <Box boxShadow={2} borderRadius={1} padding={2} marginTop={3}>
        <Typography variant="h5" component="h2" align="center">
          Size
        </Typography>
        <FormControl fullWidth sx={{ alignItems: "center" }}>
          <RadioGroup
            row
            aria-labelledby="demo-row-radio-buttons-group-label"
            name="row-radio-buttons-group"
            value={selectedSize}
            onChange={handleChange}
          >
            <FormControlLabel value="small" control={<Radio />} label="Small" />
            <FormControlLabel value="medium" control={<Radio />} label="Medium" />
            <FormControlLabel value="large" control={<Radio />} label="Large" />
          </RadioGroup>
        </FormControl>
      </Box>
    </Container>
  );
}

export default Size;
