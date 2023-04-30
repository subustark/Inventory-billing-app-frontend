import React, { useState, useEffect } from "react";

const Invoice = () => {
  const [invoices, setInvoices] = useState([]);

  const getInvoices = () => {
    fetch("https://inventory-billing-app-backend.onrender.com/invoices", {
      method: "GET",
    })
      .then((data) => data.json())
      .then((res) => setInvoices(res))
      .catch((e) => console.log(e));
  };

  useEffect(() => getInvoices(), [invoices]);

  return (
    <div className="container-fluid">
      <div className="row row-cols-1 row-cols-md-3 row-cols-xl-4 row-cols-sm-2 g-4 m-1">
        {invoices.map((invoice) => {
          return (
            <div key={invoice._id} className="col m-4">
              <div
                className="card border-danger text-center"
                style={{ width: "18rem", color: "red" }}
              >
                <div class="card-header">{invoice.customerName}</div>
                <div class="card-body" style={{ color: "red" }}>
                  <h5 class="card-title">Items purchased</h5>
                  <p class="card-text">{invoice.item1}</p>
                  <p class="card-text">{invoice.item2}</p>
                  <p class="card-text">{invoice.item3}</p>
                  <p class="card-text">
                    Purchase date: &nbsp;{invoice.purchasedDate}
                  </p>
                  <h5 class="card-title">
                    Total Amount: &nbsp;{invoice.amount}
                  </h5>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Invoice;
