import LoginPage from "./components/pages/login/LoginPage";
import { Routes, Route } from "react-router-dom";
import OrderPage from "./components/order/OrderPage.jsx"
import ErrorPage from "./components/error/ErrorPage.jsx"

function App() {
  return(
    <Routes>
      <Route path="/" element={<LoginPage/>}/>
      <Route path="/order" element={<OrderPage/>}/>      
      <Route path="*" element={<ErrorPage/>}/>      
    </Routes>
  )
}
export default App;
