import React, { useState,useContext , Fragment } from "react";
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
    fetch("http://127.0.0.1:3000/spaces", {
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

  const [files, setFiles] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    const images = e.target.querySelectorAll("input[type=file]");
    const spaceId = "12"; // replace with the actual space ID
  
    for (let i = 0; i < images.length; i++) {
      const file = images[i].files[0];
      formData.append("image_url", file);
      formData.append("space_id", spaceId);
  
      try {
        const response = await fetch("http://127.0.0.1:3000/media", {
          method: "POST",
          body: formData,
        });
  
        if (!response.ok) {
          throw new Error("Failed to upload image");
        }
  
        console.log("Image uploaded successfully");
      } catch (error) {
        console.error(error);
      }
    }
  };
  const handleFileChange = (e) => {
    setFiles(e.target.files);
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
          <form onSubmit={handleSubmit}>
            <div className="form-group mb-2">
              <label htmlFor="image1">Image 1</label>
              <input
                type="file"
                className="form-control"
                name="image1"
                onChange={handleFileChange}
              />
            </div>
            <div className="form-group mb-2">
              <label htmlFor="image2">Image 2</label>
              <input
                type="file"
                className="form-control"
                name="image2"
                onChange={handleFileChange}
              />
            </div>
            <div className="form-group mb-2">
              <label htmlFor="image3">Image 3</label>
              <input
                type="file"
                className="form-control"
                name="image3"
                onChange={handleFileChange}
              />
            </div>
            <div className="form-group mb-2">
              <label htmlFor="image4">Image 4</label>
              <input
                type="file"
                className="form-control"
                name="image4"
                onChange={handleFileChange}
              />
            </div>
            <div className="form-group mb-2">
              <label htmlFor="image5">Image 5</label>
              <input
                type="file"
                className="form-control"
                name="image5"
                onChange={handleFileChange}
              />
            </div>
            <div className="form-group mb-2">
              <label htmlFor="image6">Image 6</label>
              <input
                type="file"
                className="form-control"
                name="image6"
                onChange={handleFileChange}
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



