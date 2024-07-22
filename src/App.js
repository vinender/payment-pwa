import React from 'react';
import Screen1 from './components/screen1';
import CreditRentBoost from './components/rent-boost';
import PaymentForm from './components/form';
import Screen2 from './components/screen2';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MobileSubscriptionScreen from './components/yellow';

function App() {
  return (
    <Routes>
      MobileSubscriptionScreen
      <Route exact path="/" element={<MobileSubscriptionScreen />} />
      {/* <Route exact path="/" element={<Screen1 />} /> */}
      <Route path="/credit-rent-boost" element={<CreditRentBoost />} />
      <Route path="/payment-form" element={<PaymentForm />} />
      <Route path="/screen2" element={<Screen2 />} />
    </Routes>
  );
}

export default App;