import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

const DutyList = () => {
  const [activeCalls, setActiveCalls] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/calls")
      .then((response) => {
        console.log(response.data);
        setActiveCalls(response.data);
      })
      .catch((err) => {
        console.log(err.response);
      });
  }, []);

  return (
    <div className="flex justify-center">
      <div class="relative overflow-x-auto shadow-md sm:rounded-lg w-10/12">
        <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" class="px-6 py-3">
                Call Type
              </th>
              <th scope="col" class="px-6 py-3">
                Location
              </th>
              <th scope="col" class="px-6 py-3">
                Status
              </th>
              <th scope="col" class="px-6 py-3">
                Assigned Units
              </th>
            </tr>
          </thead>
          <tbody>
            {activeCalls.map((calls, index) => {
              return (
                <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                  <td class="px-6 py-4">{calls.type}</td>
                  <td class="px-6 py-4">{calls.location}</td>
                  <td class="px-6 py-4">
                    {calls.status}
                  </td>
                  <td class="px-6 py-4">{calls.assignedTo}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DutyList;
