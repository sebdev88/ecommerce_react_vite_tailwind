import { XMarkIcon } from "@heroicons/react/24/solid";
import "./styles.css";
import { useContext } from "react";
import { ShoppingCartContext } from "../../Context";

//Detalle de producto
const CheckoutSideMenu = () => {
  const context = useContext(ShoppingCartContext);

  return (
    <aside
      className={`${
        context.isProductDetailOpen ? "flex" : "hidden"
      } product-detail flex-col fixed right-0 border border-black rounded-lg bg-white`}
    >
      <div className="flex justify-between items-center p-6">
        <h2 className="font-medium text-xl">My Order</h2>
        <div>
          <XMarkIcon
            className="h-6 w-6 text-blue-500 cursor-pointer"
            onClick={() => context.closeProductDetail()}
          ></XMarkIcon>
        </div>
      </div>
    </aside>
  );
};

export default CheckoutSideMenu;
