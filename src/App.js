import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Page404NotFound from "./component/core/page404NotFound";
import Main from "./layout/LandingPage";
// import Testqr from "./test_feature/testqr";
import DetailProduct from "./component/detailProductPage/detailProduct";
import Cart from "./component/cart/cart";
import LoginPage from "./component/auth/Login";
import RegisterPage from "./component/auth/register";
import Bill from "./component/payment/bill";
import Payment from "./test_feature/payment";
import MobilePayment from "./test_feature/mobilepayment";
import ProfilePage from "./component/profilePage/profilePage";
import OTPPage from "./component/auth/OTPPage";
import TransactionDetail from "./component/transactionDetail/transactionDetail";
import TransactionHistory from "./component/transactionDetail/transactionList";
import AuthService from "./component/auth/AuthProvider";
import StatisticsChart from "./component/admin-panel/dashboard";
import ProductList from "./component/admin-panel/ProductList";

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/detail/:id" element={AuthService.isAuthenticated() ? <DetailProduct /> : <Page404NotFound />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/bill" element={<Bill />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/otp-test" element={<OTPPage />} />
          <Route
            path="/payment/expire"
            element={
              <div className="flex items-center justify-center h-screen bg-gray-100">
                <div className="bg-white p-8 rounded shadow-md text-center">
                  <p className="text-red-500 text-xl">Payment has expired!</p>
                </div>
              </div>
            }
          
          />
          <Route path="/admin/dashboard" element={AuthService.isAdmin() ? <ProductList /> : <Page404NotFound />} />
          <Route path="/statistic" element={<StatisticsChart />} />
          <Route path="/transactions" element={AuthService.isAuthenticated() ? <TransactionHistory /> : <Page404NotFound />} />
          <Route path="/transaction-detail/:id" element={<TransactionDetail />} />
          <Route path="/payment/:paymentid" element={<Payment />} />
          <Route
            path="/payment/mobile/:paymentid"
            element={<MobilePayment />}
          />
          {/* <Route path="/testqr" element={<Testqr />} /> */}
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="*" element={<Page404NotFound />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
