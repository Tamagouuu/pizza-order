import { ReactNode, createContext, useContext, useReducer } from "react";

export type Pizza = { id: string; name: string; price: number; toppings: string[] };
type Topping = { status: boolean; id: string; name: string; price: number };

type PizzaContextState = {
  selectedPizza: Pizza | null;
  selectedSize: string;
  selectedToppings: Topping[] | [];
  total: number;
};

type PizzaContextValue = PizzaContextState & {
  setSelectedPizza: (pizza: Pizza) => void;
  setSelectedSize: (size: string) => void;
  setSelectedToppings: (topping: Topping[] | []) => void;
};

const PizzaContext = createContext<PizzaContextValue | null>(null);

type setSelectedPizzaAction = {
  type: "SET_SELECTED_PIZZA";
  payload: Pizza;
};

type setSelectedSize = {
  type: "SET_SELECTED_SIZE";
  payload: string;
};

type setSelectedToppings = {
  type: "SET_SELECTED_TOPPINGS";
  payload: Topping[];
};

type Action = setSelectedPizzaAction | setSelectedSize | setSelectedToppings;

const initialState = {
  selectedPizza: null,
  selectedSize: "medium",
  selectedToppings: [],
  total: 0,
};

function pizzaReducer(state: PizzaContextState, action: Action): PizzaContextState {
  if (action.type === "SET_SELECTED_PIZZA") {
    return { ...state, selectedPizza: action.payload };
  }

  if (action.type === "SET_SELECTED_SIZE") {
    return { ...state, selectedSize: action.payload };
  }

  if (action.type === "SET_SELECTED_TOPPINGS") {
    return { ...state, selectedToppings: action.payload };
  }

  return state;
}

function PizzaContextProvider({ children }: { children: ReactNode }) {
  const [pizzaState, dispatch] = useReducer(pizzaReducer, initialState);

  const ctx: PizzaContextValue = {
    selectedPizza: pizzaState.selectedPizza,
    selectedToppings: pizzaState.selectedToppings,
    selectedSize: pizzaState.selectedSize,
    total: pizzaState.total,
    setSelectedPizza(pizza) {
      dispatch({ type: "SET_SELECTED_PIZZA", payload: pizza });
    },
    setSelectedSize(size) {
      dispatch({ type: "SET_SELECTED_SIZE", payload: size });
    },
    setSelectedToppings(topping) {
      dispatch({ type: "SET_SELECTED_TOPPINGS", payload: topping });
    },
  };

  return <PizzaContext.Provider value={ctx}>{children}</PizzaContext.Provider>;
}

export default PizzaContextProvider;

export function usePizza() {
  const ctx = useContext(PizzaContext);

  if (!ctx) {
    throw new Error("Context is used outside the provider");
  }

  return ctx;
}
