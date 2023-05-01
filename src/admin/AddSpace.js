import React, { useState,useContext , Fragment, useEffect } from "react";
import { AuthContext } from "../components/AuthContext";
import { useParams } from "react-router-dom";


function AddSpace() {

  // const {  admin,setAdmin } = useContext(AuthContext); // Get user and admin from context

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [location, setLocation] = useState("");
  const [price, setPrice] = useState("");
  const [admin_id, setAdmin_id] = useState("");

  const handleName = (e) => {
    setName(e.target.value);
  };
  const handleDescription = (e) => {
    setDescription(e.target.value);
  };
  const handleLocation = (e) => {
    setLocation(e.target.value);
  };
  const handlePrice = (e) => {
    setPrice(e.target.value);
  };
  const handleAdmin_id = (e) => {
    setAdmin_id(e.target.value);
  };
  const admin = JSON.parse(sessionStorage.getItem("admin"));


  const { id } = useParams();

  const handleAdmin = (e) => {
    e.preventDefault();
    const space = {
      name: name,
      description: description,
      location: location,
      price: price,
      admin_id: admin.id,
    };
    console.log("space", space);
    fetch("https://leisure.onrender.com/spaces", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(space),
      
    })
      .then(() => {
        window.location.reload();
      })
      .catch((error) => {
        console.error("Error:", error);
      });
      console.log("space", space);
  };

//  fetch admin
  const [spaces, setSpaces] = useState([]);

  useEffect(() => {
    fetch("https://leisure.onrender.com/spaces")
      .then((res) => res.json())
      .then((data) => {
        setSpaces(data);
      });
  }, []);

//  get the last space
  const lastSpace = spaces[spaces.length - 1];
  console.log("lastSpace", lastSpace);

  // post an image to the space id of last space
  const [image, setImage] = useState("");

  const handleImage = (e) => {
    setImage(e.target.value);
  };

  const handleImageSubmit = (e) => {
    e.preventDefault();
    const imag = {
      image_url: image,
      space_id: lastSpace.id,
    };
    console.log("image", image);
    fetch("https://leisure.onrender.com/media", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(imag),
    })
      .then(() => {
        window.location.reload();
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <> 
    <div className="flex justify-center flex-row">
    <Fragment >
      <div className="container">
        <div className="row">
          <div className="col-md-6 offset-md-3 mt-5">
            <h1 className="text-center">Add Space</h1>
            <form onSubmit={handleAdmin}>
              <div className="form-group mb-2">
                <label htmlFor="name">Name</label>
                <input type="text" className="form-control"
                  value={name}
                  onChange={handleName}
                  placeholder="Enter name" />
              </div>
              <div className="form-group mb-2">
                <label htmlFor="description">Description</label>
                <input type="text" className="form-control"
                  value={description}
                  onChange={handleDescription}
                  placeholder="Enter description" />
              </div>
              <div className="form-group mb-2">
                <label htmlFor="location">Location</label>
                <input type="text" className="form-control"
                  value={location}
                  onChange={handleLocation}
                  placeholder="Enter location" />
              </div>
              <div className="form-group mb-2">
                <label htmlFor="price">Price</label>
                <input type="text" className="form-control"
                  value={price}
                  onChange={handlePrice}
                  placeholder="Enter price" />
              </div>
              
              <button type="submit" className="btn btn-primary btn-block mb-5">Submit</button>
            </form>
          </div>
        </div>
      </div>
    </Fragment>
    <Fragment >
      {/*upload 6 images*/}
      <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 mt-5">
          <h1 className="text-center">Upload Images</h1>
          <form 
          onSubmit={handleImageSubmit}
          >
            {/* <div className="form-group mb-2">
              <label htmlFor="image1">Image 1</label>
              <input
                type="file"
                className="form-control"
                name="image1"
                onChange={handleFileChange}
              />
            </div>    */}
            <div className="form-group mb-2">
              <label htmlFor="image">Image </label>
              <input
                type="text"
                className="form-control"
                value={image}
                onChange={handleImage}
                placeholder="Enter image url"
              />
            </div>

            <button type="submit" className="btn btn-primary btn-block mb-5">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
    </Fragment>
    </div>
     </>
  );
}

export default AddSpace;



