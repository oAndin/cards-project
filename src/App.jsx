import { Outlet } from "react-router-dom";
import Header from "./components/Header/Index";
import Footer from "./components/Footer/Index";

const App = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  )
}

export default App;
