import { createContext, useMemo, useReducer } from "react";
const reducer = (state, action) => {
    switch (action.type) {
      case "ADD":
        const existingProduct = state.find(item => item.id === action.id);
  
        if (existingProduct) {
          return state.map(item =>
            item.id === action.id
              ? { ...item, quantity: item.quantity + 1 } 
              : item
          );
        } else {
          return [
            ...state,
            { 
              id: action.id, 
              title: action.title, 
              price: action.price, 
              thumbnail: action.thumbnail, 
              category: action.category, 
              quantity: 1  
            }
          ];
        }
  
      case "UPDATE":
        return state.map(item =>
          item.id === action.id
            ? { ...item, quantity: action.quantity }
            : item
        );
  
      case "REMOVE":
        return state.filter((item, index) => index !== action.index);
  
      case "INCREMENT":
        return state.map(item =>
          item.id === action.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
  
      case "DECREMENT":
        return state.map(item =>
          item.id === action.id && item.quantity > 1
            ? { ...item, quantity: item.quantity - 1 }
            : item
        );

      case "DROP":
        return []
  
      default:
        console.log(action.type)
        break;
    }
  };
  


export const CartContext=createContext()

export const CartProvider=({children})=>{
    const [state, dispatch] = useReducer(reducer,[]);
    const contextValue= useMemo(()=>{
        return {state,dispatch};
    }, [state,dispatch])
    return(
        <CartContext.Provider value={contextValue}>{children}</CartContext.Provider>
    )
}
