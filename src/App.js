// src/App.js
import React from 'react';
import logo from './logo.svg';
import './App.css';
import Screen1 from './components/screen1';
import CreditRentBoost from './components/rent-boost';
import PaymentForm from './components/form';
import Screen2 from './components/screen2';

function App() {
  return (
    <div className="">
     {/* <Screen1 /> */}
      <CreditRentBoost/>
      {/* <PaymentForm/> */}
      {/* <Screen2/> */}
    </div>
  );
}

export default App;
// 

 

// import React from 'react';
// import Screen1 from './components/screen1';
// import CreditRentBoost from './components/rent-boost';
// import PaymentForm from './components/form';
// import Screen2 from './components/screen2';
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// function App() {
//   return (
//     <Router>
//       <Switch>
//         <Route exact path="/" component={Screen1} />
//         <Route path="/credit-rent-boost" component={CreditRentBoost} />
//         <Route path="/payment-form" component={PaymentForm} />
//         <Route path="/screen2" component={Screen2} />
//       </Switch>
//     </Router>
//   );
// }