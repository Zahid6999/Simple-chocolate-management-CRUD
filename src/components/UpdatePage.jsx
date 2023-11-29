import React from "react";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const UpdatePage = () => {
  const chocolate = useLoaderData();
  const { _id, name, country, select } = chocolate;

  const handleUpdate = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const country = form.country.value;
    const select = form.select.value;
    const updatedChocolate = { name, country, select };
    fetch(`http://localhost:5000/chocolate/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updatedChocolate),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          let timerInterval;
          Swal.fire({
            title: "Your Chocolate Updated",
            html: "I will close in <b></b> milliseconds.",
            timer: 2000,
            timerProgressBar: true,
            didOpen: () => {
              Swal.showLoading();
              const timer = Swal.getPopup().querySelector("b");
              timerInterval = setInterval(() => {
                timer.textContent = `${Swal.getTimerLeft()}`;
              }, 100);
            },
            willClose: () => {
              clearInterval(timerInterval);
            },
          }).then((result) => {
            /* Read more about handling dismissals below */
            if (result.dismiss === Swal.DismissReason.timer) {
              console.log("I was closed by the timer");
            }
          });
        }
      });
  };
  return (
    <div>
      <form
        className="newChocolate-container"
        onSubmit={handleUpdate}
        style={{ paddingTop: "20px" }}
      >
        <div className="form-control">
          <label htmlFor="Name">Name</label>
          <br />
          <input type="text" name="name" defaultValue={name} />
        </div>

        <div className="form-control">
          <label htmlFor="Name">Country</label>
          <br />
          <input type="text" name="country" defaultValue={country} />
        </div>
        <div className="form-control">
          <label htmlFor="Name">Category</label>
          <br />
          <select className="select" name="select" defaultValue={select}>
            <option>Premium</option>
            <option>Medium</option>
            <option>Normal</option>
          </select>
        </div>

        <input type="submit" value="Update" className="submit-btn" />
      </form>
    </div>
  );
};

export default UpdatePage;
