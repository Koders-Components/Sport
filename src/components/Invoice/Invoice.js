import React  from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { usePDF } from 'react-to-pdf';
import data from '../../records.json';

function Invoice() {
  const { toPDF, targetRef } = usePDF({filename: 'page.pdf'});

  return (
    <div className="container-fluid mt-3">
      {/* Button to download PDF */}
      <div className="text-center mb-3">
        <button className="btn btn-primary" onClick={() => toPDF()}>
          Download PDF
        </button>
      </div>

      <div ref={targetRef} className="invoice-container">
        {data.map((invoice) => (
          <div key={invoice.id} style={{ pageBreakInside: 'avoid' }}>
            {/* Invoice Header */}
            <div className="row mb-4">
              <div className="col-md-6">
                <div
                  style={{
                    backgroundColor: 'transparent',
                    width: '100px',
                    height: '100px',
                    border: '2px solid #FBA677',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    paddingBottom: '15px',
                    lineHeight: '50px',
                    fontWeight: 'bold',
                    fontSize: '7em',
                  }}
                >
                  A
                </div>
              </div>
              <div className="col-md-6 text-end">
                <h2>Invoice | {invoice.clientname}</h2>
                <p>No. {invoice.appno} | Date {invoice.date}</p>
              </div>
            </div>

            {/* From and To Section */}
            <div className="row mb-4">
              <div className="col-md-6">
                <h5>From--</h5>
                <p>{invoice.yourname}</p>
                <p>{invoice.youradd}</p>
              </div>
              <div className="col-md-6 text-end">
                <h5>--To</h5>
                <p>{invoice.clientname}</p>
                <p>{invoice.clientadd}</p>
              </div>
            </div>

            {/* Payment Info */}
            <div className="row mb-4">
              <div className="col-md-6">
                <h5>Payment Info--</h5>
                <p>
                  <strong>IBAN:</strong> {invoice.iban}
                </p>
                <p>
                  <strong>PayPal:</strong> {invoice.paypal}
                </p>
              </div>
            </div>

            {/* Items Table */}
            <div className="row mb-4">
              <div className="col-12">
                <table className="table table-bordered">
                  <thead>
                    <tr>
                      <th>Description</th>
                      <th>Rate</th>
                      <th>Hrs</th>
                      <th>Amount</th>
                    </tr>
                  </thead>
                  <tbody>
                    {invoice.items.map((item, index) => (
                      <tr key={index}>
                        <td>
                          <img
                            src={item.img}
                            alt="Item"
                            style={{ width: '50px', height: '50px' }}
                          />{' '}
                          {item.description}
                        </td>
                        <td>€{item.rate.toFixed(2)}</td>
                        <td>{item.hrs}</td>
                        <td>€{item.amount.toFixed(2)}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Subtotal and Total */}
            <div className="row mb-4">
              <div className="col-md-6">
                <p>{invoice.paymentTerms}</p>
              </div>
              <div className="col-md-6 text-end">
                <p>
                  <strong>Subtotal:</strong> €{invoice.items
                    .reduce((acc, item) => acc + item.amount, 0)
                    .toFixed(2)}
                </p>
                <p>
                  <strong>BTW 21%:</strong> €{(
                    invoice.items.reduce((acc, item) => acc + item.amount, 0) *
                    0.21
                  ).toFixed(2)}
                </p>
                <h5>
                  <strong>Total:</strong> €{(
                    invoice.items.reduce((acc, item) => acc + item.amount, 0) *
                    1.21
                  ).toFixed(2)}
                </h5>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Footer */}
      <div className="row" style={{ backgroundColor: '#F9F9FA' }}>
        <div className="col-12 text-center py-3">
          <p>Thank you!</p>
          <p>
            {data[0]?.yourname} | {data[0]?.yourmobno} | {data[0]?.youradd}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Invoice;