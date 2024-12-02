export const initialState = JSON.parse(localStorage.getItem("storage")) || {
  wishlist: [],
  cart: [],
};

export const reducer = (state, action) => {
  let result = state;
  switch (action.type) {
    case "ADD__WISHLIST":
      let index = state.wishlist.findIndex(
        (pro) => pro.id === action.payload.id
      );
      if (index < 0) {
        result = { ...state, wishlist: [...state.wishlist, action.payload] };
        localStorage.setItem("storage", JSON.stringify(result));
        return result;
      } else {
        result = {
          ...state,
          wishlist: state.wishlist.filter(
            (pro) => pro.id !== action.payload.id
          ),
        };
        localStorage.setItem("storage", JSON.stringify(result));
        return result;
      }
    case "ADD_CART":
  if (!Array.isArray(state.cart)) {
    result = {
      ...state,
      cart: [{ ...action.payload, amountMiqdor: 1 }],
    };
    localStorage.setItem("storage", JSON.stringify(result));
    return result;
  }

  let CartIndex = state.cart.findIndex(
    (pro) => pro.id === action.payload.id
  );
  if (CartIndex < 0) {
    result = {
      ...state,
      cart: [...state.cart, { ...action.payload, amountMiqdor: 1 }],
    };
    localStorage.setItem("storage", JSON.stringify(result));
    return result;
  } else {
    result = {
      ...state,
      cart: state.cart.map((pro, inx) =>
        CartIndex === inx
          ? { ...pro, amountMiqdor: pro.amountMiqdor + 1 }
          : pro
      ),
    };
    localStorage.setItem("storage", JSON.stringify(result));
    return result;
  }

    case "DEC_CART":
    let decIndex1 = state.cart.findIndex(
      (pro) => pro.id === action.payload.id
    );
    result = {
      ...state,
      cart: state.cart.map((pro, inx) =>
        decIndex1 === inx
          ? { ...pro, amountMiqdor: pro.amountMiqdor - 1 }
          : pro
      ),
    };
    localStorage.setItem("storage", JSON.stringify(result));
    return result;
    case "DEC_CART":
      let decIndex = state.cart.findIndex(
        (pro) => pro.id === action.payload.id
      );
      let updatedCart = state.cart
        .map((pro, inx) =>
          decIndex === inx
            ? { ...pro, amountMiqdor: pro.amountMiqdor - 1 }
            : pro
        )
        .filter((pro) => pro.amountMiqdor > 0);
      result = { ...state, cart: updatedCart };
      localStorage.setItem("storage", JSON.stringify(result));
      return result;

    case "REMOVE__CART":
      result = {
        ...state,
        cart: state.cart.filter((item) => item.id !== action.payload.id),
      };
      localStorage.setItem("storage", JSON.stringify(result));
      return result;
    case "CLEAR_CART":
      result = { ...state, cart: [] };
      localStorage.setItem("storage", JSON.stringify(result));
      return result;

    default:
      return state;
  }
};
