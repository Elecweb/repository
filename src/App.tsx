import "./App.css";
import useViewModel from "./app.viewmodel";
import Tab from "./common/base-ui/Tab.component";
import Product from "./product/product.component";

function App() {
  const { products, currentTab, setCurrentTab, tabs } = useViewModel();

  return (
    <div className="bg-white">
      <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl font-extrabold tracking-tight text-gray-900">
          Products
        </h2>
        <div>
          <Tab currentTab={currentTab} tabs={tabs} onChange={setCurrentTab} />
        </div>

        <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {products.map((product) => (
            <Product
              key={product.getId()}
              color={product.getColor()}
              imageAlt={product.getImageAlt()}
              imageSrc={product.getImageSrc()}
              name={product.getName()}
              price={product.getPrice()}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
