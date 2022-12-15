import React, {lazy} from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

const  FourOfour = lazy(()=> import('./components/FourOfour'));
const Index = lazy(()=>import('./components/Index'));
const InvoiceDetails = lazy(()=>import('./components/InvoiceDetails'));
const  Expenses = lazy(()=>import('./components/expenses'));
const Invoices= lazy(()=> import('./components/invoices'));


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
    
      <Routes>
        <Route path='/' element={<App />}>
          <Route index element={<Index/>}/>
          <Route path='*' element={<FourOfour/>}/>
          <Route path='invoices' element={<Invoices/>}>
            <Route path=':invoiceId' element={<InvoiceDetails/>}/>
          </Route>
          <Route path="expenses" element={<Expenses/>}/>
        </Route>
      </Routes>
    </Router>
    
  </React.StrictMode>
);

