import React from "react";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const CallinForm = () => {
  const [type, setType] = useState("");
  const [location, setLocation] = useState("");
  const [errors, setErrors] = useState(null);
  const [status, setStatus] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:8000/api/calls", {
        type,
        location,
        status,
      })
      .then((response) => {
        console.log(response);
        navigate("/dash");
      })
      .catch((err) => {
        console.log(err.response.data.err.errors);
        setErrors(err.response.data.err.errors);
      });
  };

  const callStatus = ["En Route", "On Scene", "Completed"];

  return (
    <div className="flex justify-center">
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 w-96"
      >
        <h1 className="font-medium text-red-500 text-3xl">Submit a 911 Call</h1>
        <div className="mb-4">
          <label
            className="block text-gray-700 font-bold mb-2"
            htmlFor="callType"
          >
            Call Type
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="type"
            type="text"
            placeholder="Enter call type"
            onChange={(e) => setType(e.target.value)}
            value={type}
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 font-bold mb-2"
            htmlFor="location"
          >
            Call Location
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="callType"
            type="text"
            placeholder="Enter call location"
            type="text"
            onChange={(e) => setLocation(e.target.value)}
            value={location}
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 font-bold mb-2"
            htmlFor="callType"
          >
            Call Status
          </label>
          <select
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            onChange={(e) => setStatus(e.target.value)}
            value={status}
          >
            <option value="">Select Current Status</option>
            {callStatus.map((status, i) => (
              <option key={i} value={status}>
                {status}
              </option>
            ))}
          </select>
        </div>
        <button
          type="submit"
          className="bg-blue-800 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full"
        >
          Place 911 call
        </button>
      </form>
    </div>
  );
};

export default CallinForm;
