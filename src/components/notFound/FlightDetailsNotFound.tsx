"use client";

import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import TrackingForm from "./TrackingForm";

export default function FlightDetailsNotFound() {

  return (
    <div>
      <Header />
      <div className="bg-[#f2f2f2] h-screen px-4 sm:px-0 py-6 pb-[80px]">
        <div className="mx-auto max-w-[600px]">
          <TrackingForm />
          <div className="rounded border mt-5 p-5 bg-white">Sorry, your flight checking attempt was not successful. Please check your flight number.</div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
