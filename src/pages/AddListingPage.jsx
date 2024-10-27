import React from "react";
import { useState } from "react";
import axios from "axios";
import Button from "../components/Button";
import { useNavigate } from "react-router-dom";

const baseURL = import.meta.env.VITE_API_URL;

function AddListing() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    address: "",
    lot_size: "",
    price: "",
    description: "",
    type: "",
    zone_id: "",
    amenities_nearby: "",
    realtor_name: "",
    realtor_number: "",
    longitude: "",
    latitude: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const createListing = async (newListing) => {
    try {
      await axios.post(`${baseURL}/listings`, newListing);
      console.log("Listing successfully added ");
    } catch (error) {
      console.error("Failed to create listing", error);
    }
  };

  const submitLisingHandler = (e) => {
    e.preventDefault();
    createListing(formData);
    alert("Listing successfully added");
    navigate("/listings");
    console.log("Listing added");
  };

  return (
    <div className="max-w-2xl mx-auto gap-6 flex justify-between mt-32 overflow-y-scroll pr-5 pl-5">
      <section id="postListing">
        <form onSubmit={submitLisingHandler}>
          <h1>Add a new Listing</h1>
          <input
            type="text"
            id="address"
            name="address"
            value={formData.address}
            onChange={handleInputChange}
            placeholder="Enter Lot Address"
            required
          />
          <input
            type="text"
            id="lot_size"
            name="lot_size"
            value={formData.lot_size}
            onChange={handleInputChange}
            placeholder="Enter Lot Size"
            required
          />
          <input
            type="text"
            id="price"
            name="price"
            value={formData.price}
            onChange={handleInputChange}
            placeholder="Enter Lot Price"
            required
          />
          <input
            type="text"
            id="description"
            name="description"
            value={formData.description}
            onChange={handleInputChange}
            placeholder="Enter Lot Description"
            required
          />
          <input
            type="text"
            id="type"
            name="type"
            value={formData.type}
            onChange={handleInputChange}
            placeholder="Enter Lot Type"
            required
          />
          <input
            type="text"
            id="zone_id"
            name="zone_id"
            value={formData.zone_id}
            onChange={handleInputChange}
            placeholder="Select Zone"
            required
          />
          <input
            type="text"
            id="amenities_nearby"
            name="amenities_nearby"
            value={formData.amenities_nearby}
            onChange={handleInputChange}
            placeholder="Enter Amenities Nearby"
            required
          />
          <input
            type="text"
            id="realtor_name"
            name="realtor_name"
            placeholder="Enter Name"
            value={formData.realtor_name}
            onChange={handleInputChange}
            required
          />
          <input
            type="text"
            id="realtor_number"
            name="realtor_number"
            value={formData.realtor_number}
            onChange={handleInputChange}
            placeholder="Enter Phone Number"
            required
          />
          <input
            type="text"
            id="longitude"
            name="longitude"
            value={formData.longitude}
            onChange={handleInputChange}
            placeholder="Enter Lot Longitude"
            required
          />
          <input
            type="text"
            id="latitude"
            name="latitude"
            value={formData.latitude}
            onChange={handleInputChange}
            placeholder="Enter Lot Latitude"
            required
          />
          <section id="submission">
            <Button content="Add Listing" />
          </section>
        </form>
      </section>
    </div>
  );
}

export default AddListing;
