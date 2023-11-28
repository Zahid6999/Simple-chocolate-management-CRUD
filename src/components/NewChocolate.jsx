import React from "react";
import "../style/NewChocolate.css";
import { Link } from "react-router-dom";

const NewChocolate = () => {
  // HandleSubmit--------------------
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const country = form.country.value;
    const select = form.select.value;
  };
  return (
    <div>
      <p className="link-para">
        <Link to="/">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M10.5 19.5L3 12M3 12L10.5 4.5M3 12H21"
              stroke="#141414"
              stroke-opacity="0.8"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          All Chocolate
        </Link>
      </p>

      <hr style={{ margin: "0 auto", width: "1120px" }} />
      <section className="newChocolate-container">
        <h2>New Chocolates</h2>
        <p>Use the below form to create a new product</p>

        <form onSubmit={handleSubmit}>
          <div className="form-control">
            <label htmlFor="Name">Name</label>
            <br />
            <input type="text" name="name" id="" />
          </div>

          <div className="form-control">
            <label htmlFor="Name">Country</label>
            <br />
            <input type="text" name="country" id="" />
          </div>
          <div className="form-control">
            <label htmlFor="Name">Category</label>
            <br />
            <select className="select" name="select">
              <option>Premium</option>
              <option>Medium</option>
              <option>Normal</option>
            </select>
          </div>

          <input type="submit" value="Submit" className="submit-btn" />
        </form>
      </section>
    </div>
  );
};

export default NewChocolate;
