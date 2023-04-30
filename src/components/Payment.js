import React, { useState, useEffect } from "react";
import patternTree from "../assets/img/illustrations/pattern-tree.svg";
import Footer from "./Footer";
import masterCard from "../assets/img/logos/mastercard.png";
import { Modal } from "@mantine/core";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Payment = () => {
  const [userDetails, setUserDetails] = useState({});
  const { isAdmin } = userDetails;

  useEffect(() => {
    const userDetails = JSON.parse(localStorage.getItem("userDetails"));
    setUserDetails(userDetails);
  }, [userDetails.id]);

  const [updateModal, setUpdateModal] = useState(false);
  const [addModal, setAddModal] = useState(false);
  const [paymentCards, setPaymentCards] = useState([]);
  const [cardNumber, setCardNumber] = useState("");
  const [cardImage, setCardImage] = useState("");
  const [cardId, setCardId] = useState("");
  const [newCardNumber, setNewCardNumber] = useState("");
  const [newCardImage, setNewCardImage] = useState("");
  const [bills, setBills] = useState([]);
  const [billUpdateModal, setBillUpdateModal] = useState(false);
  const [billAddModal, setBillAddModal] = useState(false);
  const [customerName, setCustomerName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [vatNumber, setVatNumber] = useState("");
  const [amount, setAmount] = useState("");
  const [billId, setBillId] = useState("");
  const [newCustomerName, setNewCustomerName] = useState("");
  const [newEmail, setNewEmail] = useState("");
  const [newMobile, setNewMobile] = useState("");
  const [newVatNumber, setNewVatNumber] = useState("");
  const [newAmount, setNewAmount] = useState("");

  const updateCard = (e) => {
    e.preventDefault();
    setUpdateModal(false);
    const updatedCard = {
      number: cardNumber,
      image: cardImage,
    };
    fetch(
      `https://inventory-billing-app-backend.onrender.com/cards/${cardId}`,
      {
        method: "PUT",
        body: JSON.stringify(updatedCard),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  };

  const addCard = (e) => {
    e.preventDefault();
    setAddModal(false);
    const newCard = {
      number: newCardNumber,
      image: newCardImage,
    };
    fetch("https://inventory-billing-app-backend.onrender.com/cards", {
      method: "POST",
      body: JSON.stringify(newCard),
      headers: {
        "Content-Type": "application/json",
      },
    });
  };

  const getCard = (id) => {
    fetch(`https://inventory-billing-app-backend.onrender.com/cards/${id}`, {
      method: "GET",
    })
      .then((data) => data.json())
      .then((res) => {
        setCardNumber(res.number);
        setCardImage(res.image);
        setCardId(res._id);
      })
      .catch((e) => console.log(e));
  };

  const getCards = () => {
    fetch("https://inventory-billing-app-backend.onrender.com/cards", {
      method: "GET",
    })
      .then((data) => data.json())
      .then((res) => setPaymentCards(res))
      .catch((e) => console.log(e));
  };

  useEffect(() => getCards(), [paymentCards]);

  const getBills = () => {
    fetch("https://inventory-billing-app-backend.onrender.com/bills", {
      method: "GET",
    })
      .then((data) => data.json())
      .then((res) => {
        setBills(res);
      })
      .catch((e) => console.log(e));
  };

  useEffect(() => getBills(), [bills]);

  const addBill = (e) => {
    e.preventDefault();
    setBillAddModal(false);
    const newBill = {
      customerName: newCustomerName,
      email: newEmail,
      mobile: newMobile,
      amount: newAmount,
      vatNumber: newVatNumber,
    };
    fetch("https://inventory-billing-app-backend.onrender.com/bills", {
      method: "POST",
      body: JSON.stringify(newBill),
      headers: {
        "Content-Type": "application/json",
      },
    });
  };

  const getBill = (id) => {
    fetch(`https://inventory-billing-app-backend.onrender.com/bills/${id}`, {
      method: "GET",
    })
      .then((data) => data.json())
      .then((res) => {
        setCustomerName(res.customerName);
        setEmail(res.email);
        setMobile(res.mobile);
        setVatNumber(res.vatNumber);
        setAmount(res.amount);
        setBillId(res._id);
      })
      .catch((e) => console.log(e));
  };

  const removeBill = (id) => {
    fetch(`https://inventory-billing-app-backend.onrender.com/bills/${id}`, {
      method: "DELETE",
    })
      .then((data) => data.json())
      .then(
        toast.success("Deleted successfully!", {
          autoClose: 3000,
          theme: "colored",
        })
      )
      .catch((e) => console.log(e));
  };

  const updateBill = (e) => {
    e.preventDefault();
    setBillUpdateModal(false);
    const updatedBill = {
      customerName: customerName,
      email: email,
      mobile: mobile,
      amount: amount,
      vatNumber: vatNumber,
    };
    fetch(
      `https://inventory-billing-app-backend.onrender.com/bills/${billId}`,
      {
        method: "PUT",
        body: JSON.stringify(updatedBill),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  };

  return (
    <div className="container-fluid py-4">
      <div className="row">
        <div className="col-lg-8">
          <div className="row">
            <div className="col-xl-6 mb-xl-0 mb-4">
              <div className="card bg-transparent shadow-xl">
                <div className="overflow-hidden position-relative border-radius-xl">
                  <span className="mask bg-gradient-danger opacity-10"></span>
                  <div className="card-body position-relative z-index-1 p-3">
                    <i className="material-icons text-white p-2">DEBIT CARD</i>
                    <h5 className="text-white mt-4 mb-5 pb-2">
                      2080&nbsp;&nbsp;&nbsp;7642&nbsp;&nbsp;&nbsp;4555&nbsp;&nbsp;&nbsp;0009
                    </h5>
                    <div className="d-flex">
                      <div className="d-flex">
                        <div className="me-4">
                          <p className="text-white text-sm opacity-8 mb-0">
                            Name of Card Holder
                          </p>
                          <h6 className="text-white mb-0">Harry Brook</h6>
                        </div>
                        <div>
                          <p className="text-white text-sm opacity-8 mb-0">
                            Expiry
                          </p>
                          <h6 className="text-white mb-0">02/23</h6>
                        </div>
                      </div>
                      <div className="ms-auto w-20 d-flex align-items-end justify-content-end">
                        <img
                          className="w-60 mt-2"
                          src={masterCard}
                          alt="logo"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-6">
              <div className="row">
                <div className="col-md-6 col-6">
                  <div className="card">
                    <div className="card-header mx-4 p-3 text-center">
                      <div className="icon icon-shape icon-md bg-gradient-warning shadow text-center border-radius-lg">
                        <i className="material-icons opacity-10">
                          account_balance
                        </i>
                      </div>
                    </div>
                    <div className="card-body pt-0 p-3 text-center">
                      <h6
                        className="text-center mb-0"
                        style={{ color: "blue" }}
                      >
                        Salary
                      </h6>
                      <hr className="horizontal dark my-3" />
                      <h5 className="mb-0" style={{ color: "blue" }}>
                        ₹8000
                      </h5>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 col-6">
                  <div className="card">
                    <div className="card-header mx-4 p-3 text-center">
                      <div className="icon icon-shape icon-md bg-gradient-warning shadow text-center border-radius-lg">
                        <i className="material-icons opacity-10">
                          account_balance_wallet
                        </i>
                      </div>
                    </div>
                    <div className="card-body pt-0 p-3 text-center">
                      <h6
                        className="text-center mb-0"
                        style={{ color: "blue" }}
                      >
                        Google Pay
                      </h6>
                      <span className="text-xs" style={{ color: "blue" }}>
                        Payment
                      </span>
                      <hr className="horizontal dark my-3" />
                      <h5 className="mb-0" style={{ color: "blue" }}>
                        ₹3500.00
                      </h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-12 mb-lg-0 mb-4">
              <div className="card mt-4">
                <div className="card-header pb-0 p-3">
                  <div className="row">
                    <div className="col-6 d-flex align-items-center">
                      <h6 className="mb-0" style={{ color: "blue" }}>
                        METHOD OF PAYMENT
                      </h6>
                    </div>
                    {isAdmin && (
                      <div className="col-6 text-end">
                        <span
                          onClick={() => {
                            setAddModal(true);
                          }}
                          className="btn bg-gradient-warning mb-0"
                        >
                          <i className="material-icons text-sm">add</i>
                          &nbsp;&nbsp;Add New Card
                        </span>
                      </div>
                    )}
                  </div>
                </div>
                <div className="card-body p-3">
                  <div className="row">
                    {paymentCards.map((card) => {
                      return (
                        <div key={card._id} className="col-md-6 mb-md-0 g-2">
                          <div className="card card-body border card-plain border-radius-lg d-flex align-items-center flex-row">
                            <img
                              className="w-10 me-3 mb-0"
                              src={card.image}
                              alt="logo"
                            />
                            <h6 className="mb-0">{card.number}</h6>
                            {isAdmin && (
                              <i
                                onClick={() => {
                                  setUpdateModal(true);
                                  getCard(card._id);
                                }}
                                className="material-icons ms-auto text-dark cursor-pointer"
                                data-bs-toggle="tooltip"
                                data-bs-placement="top"
                                title="Edit Card"
                              >
                                edit
                              </i>
                            )}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-4">
          <div className="card h-100">
            <div className="card-header pb-0 p-3">
              <div className="row">
                <div className="col-6 d-flex align-items-center">
                  <h5 className="mb-0" style={{ color: "blue" }}>
                    Invoices
                  </h5>
                </div>
              </div>
            </div>
            <div className="card-body p-3 pb-0">
              <ul className="list-group">
                <li className="list-group-item border-0 d-flex justify-content-between ps-0 mb-2 border-radius-lg">
                  <div className="d-flex flex-column">
                    <h6 className="mb-1 text-dark font-weight-bold text-sm">
                      April, 20, 2022
                    </h6>
                    <span className="text-xs">AB-2056</span>
                  </div>
                  <div className="d-flex align-items-center text-sm">
                    $812
                    <button className="btn btn-link text-dark text-sm mb-0 px-0 ms-4">
                      <i className="material-icons text-lg position-relative me-1">
                        picture_as_pdf
                      </i>{" "}
                      PDF
                    </button>
                  </div>
                </li>
                <li className="list-group-item border-0 d-flex justify-content-between ps-0 mb-2 border-radius-lg">
                  <div className="d-flex flex-column">
                    <h6 className="text-dark mb-1 font-weight-bold text-sm">
                      January, 15, 2022
                    </h6>
                    <span className="text-xs">DY-6906</span>
                  </div>
                  <div className="d-flex align-items-center text-sm">
                    $509
                    <button className="btn btn-link text-dark text-sm mb-0 px-0 ms-4">
                      <i className="material-icons text-lg position-relative me-1">
                        picture_as_pdf
                      </i>{" "}
                      PDF
                    </button>
                  </div>
                </li>
                <li className="list-group-item border-0 d-flex justify-content-between ps-0 mb-2 border-radius-lg">
                  <div className="d-flex flex-column">
                    <h6 className="text-dark mb-1 font-weight-bold text-sm">
                      May, 25, 2021
                    </h6>
                    <span className="text-xs">BA-2900</span>
                  </div>
                  <div className="d-flex align-items-center text-sm">
                    $560
                    <button className="btn btn-link text-dark text-sm mb-0 px-0 ms-4">
                      <i className="material-icons text-lg position-relative me-1">
                        picture_as_pdf
                      </i>{" "}
                      PDF
                    </button>
                  </div>
                </li>
                <li className="list-group-item border-0 d-flex justify-content-between ps-0 mb-2 border-radius-lg">
                  <div className="d-flex flex-column">
                    <h6 className="text-dark mb-1 font-weight-bold text-sm">
                      June, 15, 2020
                    </h6>
                    <span className="text-xs">NA-8097</span>
                  </div>
                  <div className="d-flex align-items-center text-sm">
                    $730
                    <button className="btn btn-link text-dark text-sm mb-0 px-0 ms-4">
                      <i className="material-icons text-lg position-relative me-1">
                        picture_as_pdf
                      </i>{" "}
                      PDF
                    </button>
                  </div>
                </li>
                <li className="list-group-item border-0 d-flex justify-content-between ps-0 border-radius-lg">
                  <div className="d-flex flex-column">
                    <h6 className="text-dark mb-1 font-weight-bold text-sm">
                      May, 25, 2021
                    </h6>
                    <span className="text-xs">MN-3202</span>
                  </div>
                  <div className="d-flex align-items-center text-sm">
                    $650
                    <button className="btn btn-link text-dark text-sm mb-0 px-0 ms-4">
                      <i className="material-icons text-lg position-relative me-1">
                        picture_as_pdf
                      </i>{" "}
                      PDF
                    </button>
                  </div>
                </li>
                <li className="list-group-item border-0 d-flex justify-content-between ps-0 border-radius-lg">
                  <div className="d-flex flex-column">
                    <h6 className="text-dark mb-1 font-weight-bold text-sm">
                      August, 15, 2020
                    </h6>
                    <span className="text-xs">SU-5560</span>
                  </div>
                  <div className="d-flex align-items-center text-sm">
                    $250
                    <button className="btn btn-link text-dark text-sm mb-0 px-0 ms-4">
                      <i className="material-icons text-lg position-relative me-1">
                        picture_as_pdf
                      </i>{" "}
                      PDF
                    </button>
                  </div>
                </li>
                <li className="list-group-item border-0 d-flex justify-content-between ps-0 border-radius-lg">
                  <div className="d-flex flex-column">
                    <h6 className="text-dark mb-1 font-weight-bold text-sm">
                      October, 10, 2022
                    </h6>
                    <span className="text-xs">VE-1010</span>
                  </div>
                  <div className="d-flex align-items-center text-sm">
                    $512
                    <button className="btn btn-link text-dark text-sm mb-0 px-0 ms-4">
                      <i className="material-icons text-lg position-relative me-1">
                        picture_as_pdf
                      </i>{" "}
                      PDF
                    </button>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-7 mt-4">
          <div className="card">
            <div className="card-header pb-0 px-3">
              <h5 className="mb-0" style={{ color: "blue" }}>
                Billing Details
              </h5>
            </div>
            <div className="card-body pt-4 p-3">
              <ul className="list-group">
                {bills.map((bill) => {
                  return (
                    <li
                      key={bill._id}
                      className="list-group-item border-0 d-flex p-4 mb-2 bg-gray-100 border-radius-lg"
                    >
                      <div className="d-flex flex-column">
                        <h6 className="mb-3 text-sm">{bill.customerName}</h6>
                        <span className="mb-2 text-sm">
                          Email:
                          <span className="text-dark font-weight-bold ms-sm-2">
                            {bill.email}
                          </span>
                        </span>
                        <span className="mb-2 text-sm">
                          Mobile:
                          <span className="text-dark ms-sm-2 font-weight-bold">
                            {bill.mobile}
                          </span>
                        </span>
                        <span className="text-sm mb-2">
                          VAT Number:{" "}
                          <span className="text-dark ms-sm-2 font-weight-bold">
                            {bill.vatNumber}
                          </span>
                        </span>
                        <span className="text-sm">
                          Bill Amount:{" "}
                          <span className="text-dark ms-sm-2 font-weight-bold">
                            ₹ {bill.amount}
                          </span>
                        </span>
                      </div>
                      {isAdmin && (
                        <div className="ms-auto text-end">
                          <button
                            onClick={() => {
                              removeBill(bill._id);
                            }}
                            className="btn btn-link text-danger text-gradient px-3 mb-0"
                          >
                            <i className="material-icons text-sm me-2">
                              delete
                            </i>
                            Delete
                          </button>
                          <button
                            onClick={() => {
                              setBillUpdateModal(true);
                              getBill(bill._id);
                            }}
                            className="btn btn-link text-dark px-3 mb-0"
                          >
                            <i className="material-icons text-sm me-2">edit</i>
                            Edit
                          </button>
                        </div>
                      )}
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
        <div className="col-md-5 mt-4">
          <div className="card h-100 mb-4">
            <div className="card-header pb-0 px-3">
              <div className="row">
                <div className="col-md-6">
                  <h5 className="mb-0" style={{ color: "blue" }}>
                    Transaction's List
                  </h5>
                </div>
                <div className="col-md-6 d-flex justify-content-start justify-content-md-end align-items-center">
                  <i className="material-icons me-2 text-lg">date_range</i>
                  <small>10 - 23 November 2022</small>
                </div>
              </div>
            </div>
            <div className="card-body pt-4 p-3">
              <h6
                className="text-uppercase text-body text-xs font-weight-bolder mb-3"
                style={{ color: "blue" }}
              >
                Latest
              </h6>
              <ul className="list-group">
                <li className="list-group-item border-0 d-flex justify-content-between ps-0 mb-2 border-radius-lg">
                  <div className="d-flex align-items-center">
                    <div className="d-flex flex-column">
                      <h5 className="mb-1 text-dark text-sm">Spotify</h5>
                      <span className="text-xs">
                        20 November 2022, at 3:00 PM
                      </span>
                    </div>
                  </div>
                  <div className="d-flex align-items-center text-success text-gradient text-sm font-weight-bold">
                    + $ 3250
                  </div>
                </li>
                <li className="list-group-item border-0 d-flex justify-content-between ps-0 mb-2 border-radius-lg">
                  <div className="d-flex align-items-center">
                    <div className="d-flex flex-column">
                      <h6 className="mb-1 text-dark text-sm">Reddit</h6>
                      <span className="text-xs">
                        12 November 2022, at 8:30 PM
                      </span>
                    </div>
                  </div>
                  <div className="d-flex align-items-center text-success text-gradient text-sm font-weight-bold">
                    + $ 8500
                  </div>
                </li>
              </ul>
              <h6 className="text-uppercase text-body text-xs font-weight-bolder my-3">
                Yesterday
              </h6>
              <ul className="list-group">
                <li className="list-group-item border-0 d-flex justify-content-between ps-0 mb-2 border-radius-lg">
                  <div className="d-flex align-items-center">
                    <div className="d-flex flex-column">
                      <h6 className="mb-1 text-dark text-sm">Wrogn</h6>
                      <span className="text-xs">
                        8 November 2022, at 7:00 PM
                      </span>
                    </div>
                  </div>
                  <div className="d-flex align-items-center text-danger text-gradient text-sm font-weight-bold">
                    - $ 150
                  </div>
                </li>
                <li className="list-group-item border-0 d-flex justify-content-between ps-0 mb-2 border-radius-lg">
                  <div className="d-flex align-items-center">
                    <div className="d-flex flex-column">
                      <h6 className="mb-1 text-dark text-sm">One 8</h6>
                      <span className="text-xs">
                        20 November 2022, at 1:23 PM
                      </span>
                    </div>
                  </div>
                  <div className="d-flex align-items-center text-dark text-gradient text-sm font-weight-bold">
                    Pending
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <Footer />
      <Modal
        opened={updateModal}
        onClose={() => setUpdateModal(false)}
        title="Card Update"
      >
        <form onSubmit={updateCard}>
          <div className="mb-1">
            <label style={{ color: "blue", fontSize: "15px" }}>
              Card number
            </label>
            <input
              value={cardNumber}
              onChange={(e) => setCardNumber(e.target.value)}
              type="text"
              className="form-control"
              placeholder="Enter card number"
            />
          </div>
          <div className="mb-1">
            <label style={{ color: "blue", fontSize: "15px" }}>
              Card Image
            </label>
            <input
              value={cardImage}
              onChange={(e) => setCardImage(e.target.value)}
              type="text"
              className="form-control"
              placeholder="Enter card image"
            />
          </div>
          <div className="d-grid mt-4">
            <button className="btn bg-gradient-success text-white text-capitalize">
              Update
            </button>
          </div>
        </form>
      </Modal>
      <Modal
        opened={addModal}
        onClose={() => setAddModal(false)}
        title="New card"
      >
        <form onSubmit={addCard}>
          <div className="mb-1">
            <label style={{ color: "blue", fontSize: "15px" }}>
              Card number
            </label>
            <input
              onChange={(e) => setNewCardNumber(e.target.value)}
              type="text"
              className="form-control"
              placeholder="Enter card number"
            />
          </div>
          <div className="mb-1">
            <label style={{ color: "blue", fontSize: "15px" }}>
              Card Image
            </label>
            <input
              onChange={(e) => setNewCardImage(e.target.value)}
              type="text"
              className="form-control"
              placeholder="Enter card image"
            />
          </div>
          <div className="d-grid mt-4">
            <button className="btn bg-gradient-success text-white text-capitalize">
              Create
            </button>
          </div>
        </form>
      </Modal>
      <Modal
        opened={billUpdateModal}
        onClose={() => setBillUpdateModal(false)}
        title="Bill Update"
      >
        <form onSubmit={updateBill}>
          <div className="mb-1">
            <label style={{ color: "blue", fontSize: "15px" }}>
              Customer name
            </label>
            <input
              value={customerName}
              onChange={(e) => setCustomerName(e.target.value)}
              type="text"
              className="form-control"
              placeholder="Enter customer name"
            />
          </div>
          <div className="mb-1">
            <label style={{ color: "blue", fontSize: "15px" }}>
              Email Address
            </label>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              className="form-control"
              placeholder="Enter email"
            />
          </div>
          <div className="mb-1">
            <label style={{ color: "blue", fontSize: "15px" }}>
              Mobile Number
            </label>
            <input
              value={mobile}
              onChange={(e) => setMobile(e.target.value)}
              type="text"
              className="form-control"
              placeholder="Enter mobile"
            />
          </div>
          <div className="mb-1">
            <label style={{ color: "blue", fontSize: "15px" }}>
              VAT number
            </label>
            <input
              value={vatNumber}
              onChange={(e) => setVatNumber(e.target.value)}
              type="text"
              className="form-control"
              placeholder="Enter vat number"
            />
          </div>
          <div className="mb-1">
            <label style={{ color: "blue", fontSize: "15px" }}>Amount</label>
            <input
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              type="text"
              className="form-control"
              placeholder="Enter amount"
            />
          </div>
          <div className="d-grid mt-4">
            <button className="btn bg-gradient-success text-white text-capitalize">
              Update
            </button>
          </div>
        </form>
      </Modal>
      <Modal
        opened={billAddModal}
        onClose={() => setBillAddModal(false)}
        title="New card"
      >
        <form onSubmit={addBill}>
          <div className="mb-1">
            <label style={{ color: "blue", fontSize: "15px" }}>
              Card number
            </label>
            <input
              onChange={(e) => setNewCardNumber(e.target.value)}
              type="text"
              className="form-control"
              placeholder="Enter card number"
            />
          </div>
          <div className="mb-1">
            <label style={{ color: "blue", fontSize: "15px" }}>
              Card Image
            </label>
            <input
              onChange={(e) => setNewCardImage(e.target.value)}
              type="text"
              className="form-control"
              placeholder="Enter card image"
            />
          </div>
          <div className="d-grid mt-4">
            <button className="btn bg-gradient-success text-white text-capitalize">
              Create
            </button>
          </div>
        </form>
      </Modal>
      <ToastContainer />
    </div>
  );
};

export default Payment;
