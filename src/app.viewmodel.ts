import { useMemo, useState } from "react";
import Product from "./product/product.model";

const useViewModel = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [currentTab, setCurrentTab] = useState("api");

  const tabs = useMemo(
    () => [
      {
        name: "API",
        value: "api",
      },
      {
        name: "Localstorage",
        value: "localstorage",
      },
      {
        name: "Mock",
        value: "mock",
      },
    ],
    []
  );

  return { products, currentTab, setCurrentTab, tabs };
};

export default useViewModel;
