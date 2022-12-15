import React, {Suspense} from 'react'
import { Link, Outlet } from 'react-router-dom'
import { getInvoices } from '../data'
import Invoice from './invoice'

const Invoices = () => {
    let invoices = getInvoices()
  return (
    <div>
        <h4>Invoices</h4>
        <div className="invoice__container">
            <div className="invoices">
                {
                    invoices.map((invoice)=>(<Link to={`/invoices/${invoice.number}`} key={invoice.number}><Invoice invoice={invoice}/></Link>))
                }
            </div>
            <div className="outlet">
                <Suspense fallback={<h4>loading details</h4>}>
                    <Outlet/>
                </Suspense>
            </div>
        </div>
        
    </div>
  )
}

export default Invoices