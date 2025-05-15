'use client'

import React, { useEffect } from "react";
import { Button } from "@/components/ui/button";
import OverlayCards from "@/components/custom/overlayCards";
import { useDispatch, useSelector } from "react-redux";
import { RootState, AppDispatch } from '../../../redux/store';
import { fetchDeals } from "../../../redux/slice/dealSlice";
import { API_BASE_URL } from '@/config';
import { Loader } from "@/components/custom/loader";

function Deals() {
  const dispatch: AppDispatch = useDispatch();
  const { deals, loading, error } = useSelector((state: RootState) => state.deals);

  useEffect(() => {

    const url = ` ${API_BASE_URL}/deals `; 
    console.log("URL for deals API:", url);
    dispatch(fetchDeals(url));
  }, []);

  if (loading){
    return(
      <Loader />
    )
  } 
  
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="mt-28 flex flex-col justify-center items-center">
      <h1 className="text-5xl mb-11 font-extrabold">Deals</h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 sm:grid-cols-1 gap-4 mb-20 gap-y-6">
        {deals.length > 0 ? (
          deals.map((deal) => (
            <OverlayCards
              key={deal?._id}
              heading={deal?.heading}
              src={deal?.src}
              subtitle={deal?.subtitle}
              overlaycolor={deal?.overlaycolor}
            />
          ))
        ) : (
          <p>No deals available.</p>
        )}
      </div>
      <Button
        type="submit"
        className="bg-[#7bb52b] w-60 text-white h-12 hover:bg-[#91bd54]"
      >
        VIEW ALL DEALS
      </Button>
    </div>
  );
}

export default Deals;
