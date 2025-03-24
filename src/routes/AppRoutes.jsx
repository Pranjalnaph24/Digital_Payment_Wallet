import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from "react";

import Home from "../pages/Home";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import Dashboard from "../components/Dashboard";

import Wallet from "../components/Wallet";  // ✅ Import Wallet Component
import SendMoney from "../components/wallet/SendMoney";  // ✅ Import Send Money Feature
import PayMerchant from "../components/wallet/PayMerchant";  // ✅ Import Pay Merchant Feature
import BillPayment from "../components/wallet/BillPayment";  // ✅ Import Bill Payment Feature
import QRPayment from "../components/wallet/QrPayment";  // ✅ Import QR Payment Feature

import Transactions from "../components/Transaction";
import {Scanqr}from "../components/Scanqr";
import Notifications from "../components/Notifications";
import AdminPanel from "../pages/AdminPanel";

function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/scanqr" element={<Scanqr />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/dashboard" element={<Dashboard />} />

        {/* Wallet Routes */}
        <Route path="/wallet" element={<Wallet />} />
        <Route path="/wallet/send-money" element={<SendMoney />} />
        <Route path="/wallet/pay-merchant" element={<PayMerchant />} />
        <Route path="/wallet/bill-payment" element={<BillPayment />} />
        <Route path="/wallet/qr-payment" element={<QRPayment />} />

        <Route path="/notifications" element={<Notifications />} />
        <Route path="/transactions" element={<Transactions />} />
        <Route path="/admin-panel" element={<AdminPanel />} />
      </Routes>
    </Router>
  );
}

export default AppRoutes;
