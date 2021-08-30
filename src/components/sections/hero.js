import React from "react";

export default function Hero() {
  return (
    <div className="hero h-full text-center">
      <div className="container px-3">
        <div className="hero-content pt-16">
          <h1 className="text-indigo-900 font-bold text-4xl">
            Build project plans, coordinate tasks, and hit deadlines
          </h1>
          <h5 className="text-gray-600 text-xl font-semibold mt-8 max-w-prose">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout
          </h5>
          <button className="bg-indigo-900 text-white rounded-lg px-8 py-3 mt-10 font-medium w-10/12">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
}