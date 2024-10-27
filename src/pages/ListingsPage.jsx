import React from "react";
import Card from "../components/Card";
import axios from "axios";
import { useState, useEffect } from "react";
import { Button } from "@headlessui/react";
import { useNavigate } from "react-router-dom";

const baseURL = import.meta.env.VITE_API_URL;

function ListingsPage() {
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

  const [listings, setListings] = useState([]);

  const getListings = async () => {
    try {
      const response = await axios.get(`${baseURL}/listings`);
      setListings(response.data);
    } catch (error) {
      console.error("Failed to fetch listings", error);
    }
  };

  useEffect(() => {
    getListings();
  }, []);

  const addListing = async (event) => {
    try {
      const formData = event.target;

      const newListing = {
        address: formData.address.value,
        lot_size: formData.lot_size.value,
        price: formData.price.value,
        description: formData.description.value,
        type: formData.type.value,
        zone_id: formData.zone_id.value,
        amenities_nearby: formData.amenities_nearby.value,
        realtor_name: formData.realtor_name.value,
        realtor_number: formData.realtor_number.value,
        longitude: formData.longitude.value,
        latitude: formData.latitude.value,
      };

      await axios.post(`${baseURL}/listings`, newListing);
      setListings([]);
    } catch (err) {
      console.error("Failed to fetch listings", err);
    }
  };

  async function deleteListing(listingId) {
    try {
      await axios.delete(`${baseURL}/listings/${listingId}`);
      setListings([]);
    } catch (error) {
      console.error("Failed to delete listing", error);
    }
  }

  const deleteListingHandler = (currentListing) => {
    console.log(currentListing);
    alert("Listing has been successfully deleted");
    navigate("/listings");
    deleteListing(currentListing);
  };

  return (
    <>
      <div className="Card max-w-2xl mx-auto mt-8 flex pr-5 pl-5">
        <Card />
      </div>
      <div className="Card max-w-2xl mx-auto mt-8">
        {listings.map((currentListing) => {
          return (
            <>
              <ul className="max-w-2xl mx-auto bg-clip-padding bg-white shadow gap-2 flex rounded-lg justify-between overflow-y-scroll">
                <li>{currentListing.address}</li>
                <li>{currentListing.lot_size}</li>
                <li>{currentListing.price}</li>
                <li>{currentListing.type}</li>
                <li>{currentListing.zone}</li>
                <li>{currentListing.city}</li>
                <li>{currentListing.category}</li>
                <li>{currentListing.amenities_nearby}</li>
                <li>{currentListing.realtor_name}</li>
                <li>{currentListing.realtor_number}</li>
              </ul>
              <Button
                className="rounded bg-black py-2 px-4 text-sm text-white data-[hover]:bg-sky-500 data-[active]:bg-sky-700"
                onClick={() => deleteListingHandler(currentListing.id)}
              >
                Delete
              </Button>
            </>
          );
        })}
      </div>
    </>
  );
}

export default ListingsPage;
