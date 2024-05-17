import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Page404NotFound from "./component/core/page404NotFound";
import Main from "./layout/LandingPage";
// import Testqr from "./test_feature/testqr";
import DetailProduct from "./component/detailProductPage/detailProduct";
import Cart from "./component/cart/cart";
<<<<<<< HEAD
import Navigate from "./component/auth/login";
import Bill from "./component/payment/bill";
=======
import Payment from "./test_feature/payment";
import MobilePayment from "./test_feature/mobilepayment";
>>>>>>> 2430a37 (test feature init)

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/detail" element={<DetailProduct />} />
          <Route path="/cart" element={<Cart />} />
<<<<<<< HEAD
          <Route path="/bill" element={<Bill />} />
          {/* <Route path="/login" element={<Navigate />} /> */}
          {/* <Route path="/register" element={<Navigate />} /> */}
=======
          <Route path="/payment/:paymentid" element={<Payment />} />
          <Route path="/payment/mobile/:paymentid" element={<MobilePayment />} />
>>>>>>> 2430a37 (test feature init)
          {/* <Route path="/testqr" element={<Testqr />} /> */}
          <Route path="*" element={<Page404NotFound />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;