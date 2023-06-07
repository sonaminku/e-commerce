import Footer from "./Footer";
import { useContext, useEffect, useState } from "react";
import { ProductsContext } from "./ProductsContext";

const Layout = ({ children }) => {
  const {setSelectedProducts} = useContext(ProductsContext)
  const [sucess, setSucess] = useState(false)
  useEffect(() => {
    if(window.location.href.includes('success')) {
      setSelectedProducts([])
      setSucess(true)
    }
  }, [setSelectedProducts])
  
  return (
    <div>
      <div className="p-5">
        {sucess && (
          <div className="mb-5 bg-green-400 text-white text-lg p-5 rounded-xl">
            Thanks for your order!
          </div>
        )}
        {children}
        </div>
      <Footer />
    </div>
  );
};

export default Layout;
