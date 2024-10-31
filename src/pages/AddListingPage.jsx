import React from "react";
import { useState } from "react";
import axios from "axios";
import Button from "../components/Button";
import { useNavigate } from "react-router-dom";
import Card from "../components/Card";
import {
  Field,
  Fieldset,
  Input,
  Label,
  Legend,
  Textarea,
} from "@headlessui/react";

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
  };

  return (
    <>
      <div className="Card max-w-2xl mx-auto mt-8 flex pr-5 pl-5">
        <Card />
      </div>
      <section id="postListing">
        <form onSubmit={submitLisingHandler}>
          <Fieldset className="space-y-8 max-w-2xl mx-auto mt-8 flex flex-col pr-5 pl-5">
            <Legend className="text-lg font-bold">Add a New Listing</Legend>
            <Field className=" flex pr-5 pl-5 overflow-hidden flex-col rounded-lg bg-white shadow">
              <Label htmlFor="address">Address</Label>
              <Input
                className="flex mb-3"
                name="address"
                type="text"
                id="address"
                value={formData.address}
                onChange={handleInputChange}
                placeholder="Enter Lot Address"
                required
                autoComplete="on"
              />
            </Field>
            <Field className=" flex pr-5 pl-5 overflow-hidden flex-col rounded-lg bg-white shadow">
              <Label htmlFor="lot_size">Lot Size</Label>
              <Input
                className="flex mb-3"
                type="text"
                id="lot_size"
                name="lot_size"
                value={formData.lot_size}
                onChange={handleInputChange}
                placeholder="Enter Lot Size"
                required
                autoComplete="on"
              />
            </Field>
            <Field className=" flex pr-5 pl-5 overflow-hidden flex-col rounded-lg bg-white shadow">
              <Label htmlFor="price"> Price </Label>
              <Input
                className="flex mb-3"
                type="text"
                id="price"
                name="price"
                value={formData.price}
                onChange={handleInputChange}
                placeholder="Enter Lot Price"
                required
                autoComplete="on"
              />
            </Field>
            <Field className=" flex pr-5 pl-5 overflow-hidden flex-col rounded-lg bg-white shadow">
              <Label htmlFor="description"> Description </Label>
              <Textarea
                className="flex mb-3"
                type="text"
                id="description"
                name="description"
                value={formData.description}
                onChange={handleInputChange}
                placeholder="Enter Lot Description"
                required
                autoComplete="on"
              />
            </Field>
            <Field className=" flex pr-5 pl-5 overflow-hidden flex-col rounded-lg bg-white shadow">
              <Label htmlFor="type"> Type </Label>
              <Input
                className="flex mb-3"
                type="text"
                id="type"
                name="type"
                value={formData.type}
                onChange={handleInputChange}
                placeholder="Enter Lot Type - Vacant lot or Business"
                required
                autoComplete="on"
              ></Input>
            </Field>
            <Field className="flex pr-5 pl-5 overflow-hidden flex-col rounded-lg bg-white shadow">
              <Label htmlFor="zone_id"> Zone </Label>
              <Input
                className="flex mb-3"
                type="text"
                id="zone_id"
                name="zone_id"
                value={formData.zone_id}
                onChange={handleInputChange}
                placeholder="Enter Zone Id between 1 and 74"
                required
                autoComplete="on"
              />
            </Field>
            <Field className="flex pr-5 pl-5 overflow-hidden flex-col rounded-lg bg-white shadow">
              <Label htmlFor="amenities_nearby"> Amenities Nearby </Label>
              <Input
                className="flex mb-3"
                type="text"
                id="amenities_nearby"
                name="amenities_nearby"
                value={formData.amenities_nearby}
                onChange={handleInputChange}
                placeholder="Enter Amenities Nearby"
                required
                autoComplete="on"
              />
            </Field>
            <Field className="flex pr-5 pl-5 overflow-hidden flex-col rounded-lg bg-white shadow">
              <Label htmlFor="realtor_name"> Realtor Name </Label>
              <Input
                className="flex mb-3"
                type="text"
                id="realtor_name"
                name="realtor_name"
                placeholder="Enter Name"
                value={formData.realtor_name}
                onChange={handleInputChange}
                required
                autoComplete="on"
              />
            </Field>
            <Field className="flex pr-5 pl-5 overflow-hidden flex-col rounded-lg bg-white shadow">
              <Label htmlFor="realtor_number"> Realtor Phone Number </Label>
              <Input
                className="flex mb-3"
                type="text"
                id="realtor_number"
                name="realtor_number"
                value={formData.realtor_number}
                onChange={handleInputChange}
                placeholder="Enter Phone Number"
                required
                autoComplete="on"
              />
            </Field>
            <Field className="flex pr-5 pl-5 overflow-hidden flex-col rounded-lg bg-white shadow">
              <Label htmlFor="longitude"> Longitude </Label>
              <Input
                className="flex mb-3"
                type="text"
                id="longitude"
                name="longitude"
                value={formData.longitude}
                onChange={handleInputChange}
                placeholder="Enter Lot Longitude"
                required
                autoComplete="on"
              />
            </Field>
            <Field className="flex pr-5 pl-5 overflow-hidden flex-col rounded-lg bg-white shadow">
              <Label htmlFor="latitude"> Latitude </Label>
              <Input
                className="flex mb-3"
                type="text"
                id="latitude"
                name="latitude"
                value={formData.latitude}
                onChange={handleInputChange}
                placeholder="Enter Lot Latitude"
                required
                autoComplete="on"
              />
            </Field>
          </Fieldset>
          <section
            className="max-w-2xl mx-auto flex pr-5 pl-5 mt-4"
            id="submission"
          >
            <Button content="Add Listing" />
          </section>
        </form>
      </section>
    </>
  );
}

export default AddListing;
