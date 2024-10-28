import React from "react";
import Card from "../components/Card";
import axios from "axios";
import { useState, useEffect } from "react";
import { Button } from "@headlessui/react";
import { useNavigate } from "react-router-dom";

const baseURL = import.meta.env.VITE_API_URL;

function ListingsPage() {
  const navigate = useNavigate();

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

  async function deleteListing(listingId) {
    try {
      await axios.delete(`${baseURL}/listings/${listingId}`);
      setListings([]);
    } catch (error) {
      console.error("Failed to delete listing", error);
    }
  }

  const deleteListingHandler = (currentListing) => {
    alert("Listing has been successfully deleted");
    navigate("/listings");
    deleteListing(currentListing);
  };

  const underwriteListingHandler = (currentListing) => {
    navigate("/underwrite");
  };

  return (
    <>
      <div className="Card max-w-2xl mx-auto mt-8 flex pr-5 pl-5">
        <Card />
      </div>
      <div className="Card max-w-2xl mx-auto mt-8">
        {listings.map((currentListing, key) => {
          return (
            <>
              <div className="mx-auto bg-clip-padding bg-white shadow gap-4 flex flex-col rounded-lg justify-between overflow-y-scroll">
                <div className="pl-2 pr-2 max-w-fit rounded-lg">
                  <img
                    src={`${baseURL}/images/vacant_lot1.webp`}
                    alt="listing"
                  />
                </div>
                <ul className="flex flex-col gap-2 m-2">
                  <li> Address | {currentListing.address}</li>
                  <li> Size | {currentListing.lot_size}</li>
                  <li> Price | {currentListing.price}</li>
                  <li> Type | {currentListing.type}</li>
                  <li> Zone | {currentListing.zone}</li>
                  <li> City | {currentListing.city}</li>
                  <li> Category | {currentListing.category}</li>
                  <li> Amenities Nearby | {currentListing.amenities_nearby}</li>
                  <li> Realtor Name | {currentListing.realtor_name}</li>
                  <li>
                    Realtor Phone Number | {currentListing.realtor_number}
                  </li>
                </ul>
              </div>
              <div className="flex justify-evenly">
                <Button
                  className="mt-4 mb-4 rounded bg-black py-2 px-4 text-sm text-white data-[hover]:bg-sky-500 data-[active]:bg-sky-700"
                  onClick={() => deleteListingHandler(currentListing.id)}
                >
                  Delete
                </Button>
                <Button
                  className="mt-4 mb-4 rounded bg-black py-2 px-4 text-sm text-white data-[hover]:bg-sky-500 data-[active]:bg-sky-700"
                  onClick={underwriteListingHandler}
                >
                  Underwrite
                </Button>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
}

export default ListingsPage;
