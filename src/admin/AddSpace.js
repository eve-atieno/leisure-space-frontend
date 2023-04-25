import React, { useState, Fragment } from "react";
// import { useCategories } from "../library";

function AddSpace() {
//   const categories = useCategories();
  const [newSpace, setNewSpace] = useState({
    name: "",
    price: "",
    location: "",
    description: "",
    category_id: 0
  });

  function handleFormInput(event) {
    setNewSpace({
      ...newSpace,
      [event.target.name]: event.target.value,
    });
  }

  function handleAdd(event) {
    event.preventDefault();
    const newData = {
      name: newSpace.name,
      location: newSpace.location,
      price: newSpace.price,
      description: newSpace.description,
      category_id: newSpace.category_id,
    };

    fetch("/spaces", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newData),
    })
      .then((resp) => resp.json())
      .then((data) => {
        setNewSpace([...newSpace, data]);
      });
    alert(`New Space Added: ${newSpace.name}`);
    event.target.reset();
  }

  return (
    <Fragment>
      <h3 style={{ textAlign: "center", marginTop: "70px" }}>ADD NEW SPACE</h3>
      <div>
        <form
          method="PATCH"
          className="edit-form"
          style={{
            width: "60%",
            border: "1px solid #ccc",
            padding: "20px",
            marginLeft: "auto",
            marginRight: "auto",
            marginTop: "50px",
            backgroundColor: "#f5f5f5",
            borderRadius: "10px",
            boxShadow: "0px 0px 10px 2px rgba(0, 0, 0, 0.1)",
            marginBottom: "20px",
          }}
          onSubmit={handleAdd}
        >
          {/* handle image upload */}
          <label htmlFor="category-name" className="form-label">
            Name:
          </label>
          <input
            type="text"
            name="name"
            className="form-control"
            id="individual-name"
            value={newSpace.name}
            onChange={handleFormInput}
            style={{ marginBottom: "10px" }}
          />
          <label htmlFor="category-image" className="form-label">
            Price:
          </label>
          <input
            type="text"
            name="image"
            className="form-control"
            id="individual-price"
            value={newSpace.price}
            onChange={handleFormInput}
            style={{ marginBottom: "5px" }}
          />
          <label htmlFor="category-vendor" className="form-label">
            Location:
          </label>
          <input
            type="text"
            name="vendor"
            className="form-control"
            id="individual-location"
            value={newSpace.location}
            onChange={handleFormInput}
            style={{ marginBottom: "5px" }}
          />
          <label htmlFor="category-vendor-contact" className="form-label">
            Description:
          </label>
          <input
            type="text"
            name="vendor_contact"
            className="form-control"
            id="individual-description"
            value={newSpace.description}
            onChange={handleFormInput}
            style={{ marginBottom: "10px" }}
          />
          {/* <label htmlfor="category">Category:</label> */}
          {/* <select
            id="space_category"
            name="category_id"
            onChange={handleFormInput}
          >
            <option value="">Select Space Category...</option>
            {categories.map((option) => (
              <option key={option.id} value={option.id}>
                {option.name}
              </option>
            ))}
          </select> */}
          <br />

          <button
            type="submit"
            className="btn btn-primary"
            style={{ marginTop: "10px" }}
          >
            ADD SPACE
          </button>
        </form>
      </div>
    </Fragment>
  );
}

export default AddSpace;