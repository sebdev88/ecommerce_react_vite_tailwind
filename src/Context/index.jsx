import { createContext, useState } from "react";

export const ShoppingCartContext = createContext();

export const ShoppingCartProvider = ({ children }) => {
  //incrementa cantidad del ShoppingCart
  const [count, setCount] = useState(0);

  //Detalle de producto, abrir cerrar
  const [isProductDetailOpen, setIsProductDetailOpen] = useState(false);
  const openProductDetail = () => setIsProductDetailOpen(true);
  const closeProductDetail = () => setIsProductDetailOpen(false);

  //Product Detail Mostrar Productos
  const [productToShow, setProductToShow] = useState({}); //Objeto vacío

  return (
    <ShoppingCartContext.Provider //Provider de contexto que está más arriba.
      value={{
        count,
        setCount,
        openProductDetail,
        closeProductDetail,
        isProductDetailOpen,
        productToShow,
        setProductToShow,
      }}
    >
      {children}
    </ShoppingCartContext.Provider>
  );
};
