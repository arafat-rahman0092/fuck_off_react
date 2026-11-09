import { Outlet } from "react-router";
import Navbar from "./component/navbar";
import Footer from "./component/footer";
import { CartProvider } from "./context/CartContext.jsx";


const App = () => {
  return (
    <CartProvider>
      <div className="flex min-h-screen flex-col bg-base-100 text-base-content">
        <Navbar />
        <main className="flex-1">
          
          <Outlet />
        </main>
        <Footer classname="justify-items-end" />
      </div>
    </CartProvider>
  );
};

export default App;